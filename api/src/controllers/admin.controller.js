'use strict';
const JWT = require("jsonwebtoken");
const webtoken = process.env.JWT_SECRET || "secret";
const bcrypt = require("bcrypt");
const db = require("../models");
const { joinToObjects } = require("../helpers");
const Admin = db.admin;
const salt = Math.floor(Math.random() * 10);
// Create and Save a new Admin
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  let userData = [];

  const { email, password: plainTextPassword } = req.body;

  const userExists = await Promise.all([
    await Admin.findOne({email: email})
  ]);

  for (const resp of userExists) {
    resp && userData.push(resp);
  }

  if (userData.length > 0){ 
    res.status(400).send({ message: "Admin already exist" });
    return;
  }

  const hashPassword = await bcrypt.hash(plainTextPassword, salt);

  // Create a Admin
  const admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    designation: req.body.designation,
    role: req.body.role,
    username: req.body.username,
    password: hashPassword,
    status: 1,
  });

  // Save Admin in the database
  admin
    .save(admin)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Admin."
      });
    });
};

// Retrieve all Admin from the database.
exports.findAll = (req, res) => {
    Admin.find({ company_id: req.params.company_id })
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

// Find a single Admin with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Admin.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Admin with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Admin with id=" + id });
    });
};

// Update a Admin by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Admin.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Admin with id=${id}. Maybe Admin was not found!`
        });
      } else res.send({ message: "Admin was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Admin with id=" + id
      });
    });
};

// Delete a Admin with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Admin.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`
        });
      } else {
        res.send({
          message: "Admin was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Admin with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  Admin.deleteMany({})
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
      await Admin.findOne({email: email})
    ]);

    for (const resp of userExists) {
      if (resp) {
        userData = resp;
      }
    }
    if (!userData) {
      return res.status(202).send({ status: 404, message: "Admin not found" });
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
      id: userData._id
    };

    const token = JWT.sign({ id: loggedUser.id, username: loggedUser.emailAddress }, webtoken, {
      expiresIn: "2h",
    });
    console.log(joinToObjects(loggedUser, "token", token));
    return res.status(200).send({
      status: 200,
      message: "Logged in successfully !",
      data: joinToObjects(loggedUser, "token", token),
    });
  } catch (err) {
    console.log(err);
  }
};