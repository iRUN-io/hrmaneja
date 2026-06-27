
'use strict';
const JWT = require("jsonwebtoken");
const webtoken = process.env.JWT_SECRET || "secret";
const bcrypt = require("bcrypt");
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer');
const config = require('../../../config/mailer.config.js');
const db = require("../../models/requisite");
const { joinToObjects } = require("../../helpers");
const { smtp } = require("../../../config/mailer.config.js");
const User = db.user;
const salt = Math.floor(Math.random() * 10);
// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  let userData = [];

  const { email, password: plainTextPassword } = req.body;

  const userExists = await Promise.all([
    await User.findOne({email: email})
  ]);

  for (const resp of userExists) {
    resp && userData.push(resp);
  }

  if (userData.length > 0){ 
    res.status(400).send({ message: "User already exist" });
    return;
  }

  const hashPassword = await bcrypt.hash(plainTextPassword, salt);

  // Create a User
  const user = new User({
    name: req.body.name,
    employee_id: req.body.employee_id,
    email: req.body.email,
    phone: req.body.phone,
    company_id: req.body.company_id,
    designation: req.body.designation,
    role: req.body.role,
    username: req.body.username,
    password: hashPassword,
    status: 1,
  });

  // send mail to admin
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure, // true for 465, false for other ports
    auth: {
      user: config.smtp.auth.user,
      pass: config.smtp.auth.pass
    }
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./views/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
  };

  transporter.use('compile', hbs(handlebarOptions))

  const message = `A new company has been created with the name ${req.body.name} and the admin email is ${req.body.email}. Please login to the admin panel to approve the company.`;

  const mailOptions = {
    from: {
      name: smtp.default.name,
      address: smtp.default.from
    },
    to: smtp.default.adminMail,
    subject: 'New Company Onboarded !',
    template: 'mail',
    context: { name: 'Admin', message: message }
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  user
    .save(user)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    User.find({ company_id: req.params.company_id })
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving employees."
        });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  User.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount}  were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ."
      });
    });
};

exports.login = async (req, res) => {
  try {
    let userData;
    const { email, password: plainTextPassword } = req.body;
    //
    const userExists = await Promise.all([
      await User.findOne({email: email})
    ]);

    for (const resp of userExists) {
      if (resp) {
        userData = resp;
      }
    }
    if (!userData) {
      return res.status(202).send({ status: 404, message: "User not found" });
    }
    //
    const { password } = userData;

    const isPassword = await bcrypt.compare(plainTextPassword, password);

    if (!isPassword) {
      return res.status(202).send( { status: 404, message: "Wrong Password" });
    }

    const loggedUser = {
      name: userData.name, 
      emailAddress: userData.email, 
      phone: userData.phone, 
      company_id: userData.company_id, 
      designation: userData.designation, 
      role: userData.role, 
      username: userData.username, 
      id: userData._id,
      employee_id: userData.employee_id
    };

    const token = JWT.sign({ id: loggedUser.id, username: loggedUser.emailAddress }, webtoken, {
      expiresIn: "2h",
    });

    return res.status(200).send({
      status: 200,
      message: "Logged in successfully !",
      data: joinToObjects(loggedUser, "token", token),
    });
  } catch (err) {
    console.log(err);
  }
};

exports.count = (req, res) => {
  User.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalUsers: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}

// reset password 
exports.resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const userExists = await Promise.all([
      await User.findOne({email: email})
    ]);

    // if user not found
    if (!userExists[0]) {
      return res.status(202).send({ status: 404, message: "User not found" });
    }
    
    for (const resp of userExists) {
      if (resp) {
        const token = JWT.sign({ id: resp._id, username: resp.email, name: resp.name }, webtoken, {
          expiresIn: "2h",
        });

        const transporter = nodemailer.createTransport({
          host: config.smtp.host,
          port: config.smtp.port,
          secure: config.smtp.secure, // true for 465, false for other ports
          auth: {
            user: config.smtp.auth.user,
            pass: config.smtp.auth.pass
          }
        });
    
        const handlebarOptions = {
          viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
          },
          viewPath: path.resolve('./views/'),
        };
    
        transporter.use('compile', hbs(handlebarOptions))
    
        const mailOptions =
        {
          from: smtp.default.from,
          to: email,
          subject: 'Reset Password',
          template: 'mail',
          context: {
            name: resp.name,
            message: `Click on the link to reset your password https://app.hrmaneja.com/change-password/${token}`
          },
        }
    
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res
            .status(500)
            .send({ message: "Error Sending Email !" });
          }
          else {
            res 
            .status(200)
            .send({ message: "Password reset request sent successfully !" });
          }
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

// change password
exports.changePassword = async (req, res) => {
  try {
    const { token, password, changedPassword } = req.body;
    const tokenString = token.toString();
    const decoded = JWT.verify(tokenString, webtoken);
    const { id } = decoded;
    const userExists = await Promise.all([
      await User.findOne({_id: id})
    ]);

    for (const resp of userExists) {
      if (resp) {
        const { password: oldPassword } = resp;
        const isPassword = await bcrypt.compare(password, oldPassword);
        if (!isPassword) {
          return res.status(200).send( { status: 404, message: "Wrong Password" });
        } else {
          const newPassword = await bcrypt.hash(changedPassword, 10);
          await User.findByIdAndUpdate(id, { password: newPassword }, { useFindAndModify: false });
          return res.status(200).send({
            status: 200,
            message: "Password changed successfully !",
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(202).send({ status: 404, message: "Token is not valid" });
  }
}

// confirm token 
exports.confirmToken = async (req, res) => {
  try {
    const { token } = req.body;
    const tokenString = token.toString();
    const decoded = JWT.verify(tokenString, webtoken);
    const { id } = decoded;
    const userExists = await Promise.all([
      await User.findOne({_id: id})
    ]);

    for (const resp of userExists) {
      if (resp) {
        return res.status(200).send({
          status: 200,
          message: "Token is valid !",
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(202).send({ status: 404, message: "Token is not valid" });
  }
}