
const path = require('path');
const db = require("../models");
const hbs = require('nodemailer-express-handlebars')
const Subscribe = db.subscribe;
const nodemailer = require('nodemailer');
const config = require('../../config/mailer.config.js');
const { smtp } = require('../../config/mailer.config.js');
// Create and Save a new Subscribe
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(200).send({ message: "Email Empty !" });
    return;
  }

  Subscribe.findOne({ email: req.body.email })
  .then(data => {
    if (data)
      res.status(200).send({ status: 400, message: "User already subscribed !" });
    else {
        // Create a Subscribe
        const subscribe = new Subscribe({
            email: req.body.email,
        });
        
        // Save Subscribe in the database
        subscribe
            .save(subscribe)
            .then(data => {
              // send mail to user
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
                to: req.body.email,
                subject: 'Thank you for standing on the line for Requisite!',
                template: 'subscribeMail',
                context: {
                  name: 'Manager ',
                  introParagraph: `We're delighted to welcome you to our waitlist. Thank you for showing interest in Requisite!`,

                  firstParagraph: `As part of our waitlist community, you'll get:`,
                  
                  secondParagraph: `1. Early Updates: Be the first to know about our latest news and developments.`,
                  
                  thirdParagraph: `2. Priority Access: When we launch, you'll have first dibs.`,
                  
                  fouthParagraph: `Shape the Future: Your feedback matters. You might get opportunities to help us improve. We'll keep you posted with exciting content and updates. Feel free to reach out if you have questions or suggestions.`,
                  
                  salutation: `Thanks for joining us on this journey!`,

                  signature: 'Godfred Akpan',
                },
              }
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  res
                  .status(200)
                  .send({ message: "Error Sending Email !"});
                }
                else {
                  res 
                  .status(200)
                  .send({ message: "User subscribed successfully !",  data: data });
                }
              });
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Subscribe."
            });
            });
        }
  })
};

// Retrieve all Subscribe from the database.
exports.findAll = (req, res) => {
    Subscribe.find()
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

// Find a single Subscribe with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
   
  Subscribe.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Subscribe with id " + id });
      else res.status(200).send(data);
    })
    
    .catch(err => {
        console.log(id);
      res
        .status(500)
        .send({ message: "Error retrieving Subscribe with id=" + id });
    });
};

// Update a Subscribe by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Subscribe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Subscribe with id=${id}. Maybe Subscribe was not found!`
        });
      } else res.send({ message: "Subscribe was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Subscribe with id=" + id
      });
    });
};

// Delete a Subscribe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Subscribe.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Subscribe with id=${id}. Maybe Subscribe was not found!`
        });
      } else {
        res.send({
          message: "Subscribe was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Subscribe with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  Subscribe.deleteMany({})
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

exports.subscriberMail = (req, res) => {
  let transporter = nodemailer.createTransport({
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

  const emails = req.body.emails.split(',');


  emails.forEach(email => {
    const body = req.body.message.split('/n');
    const mailOptions = {
      from: {
        name: smtp.default.name,
        address: smtp.default.from
      },
      to: email,
      subject: `${req.body.subject}`,
      template: 'clientsMail',
      context: { 
          adminName: `${req.body.adminName}`,
          bodyParagraph: body,
          roleParagraph: `${req.body.role}`,
          enquiriesParagraph: `Have any questions? Feel free to reach out to me personally at ${req.body.adminEmail}`,
      },
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log(info);
      }
    });
  });
  res.status(200).send({ status: 200, message: "Email sent successfully !"});
};


// count all companies
exports.count = (req, res) => {
  Subscribe.countDocuments()
    .then(data => {
      res.status(200).json({ totalCompanies: data });
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving companies."
      });
    });
}