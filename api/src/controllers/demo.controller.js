
const path = require('path');
const db = require("../models");
const hbs = require('nodemailer-express-handlebars')
const Demo = db.demo;
const nodemailer = require('nodemailer');
const config = require('../../config/mailer.config.js');
const { smtp } = require('../../config/mailer.config.js');
// Create and Save a new Demo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(200).send({ message: "request error !" });
    return;
  }

  Demo.findOne({ email: req.body.email })
  .then(data => {
        // Create a Demo
        const demo = new Demo({
            date: req.body.date,
            month: req.body.month,
            year: req.body.year,
            hour: req.body.hour,
            minute: req.body.minute,
            second: req.body.second,
            meridiem: req.body.meridiem,
            note: req.body.note,
            email: req.body.email,
        });
        // Save Demo in the database
        demo
            .save(demo)
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
                subject: 'Thank you for booking your demo session',
                template: 'subscribeMail',
                context: {
                  name: 'Maneja ',
                  introParagraph: `Thank you for booking your demo session,
                  Truly, the journey of a thousand miles begins with one great step. Today, I want to congratulate you for taking a step ahead to grow your business by getting to know about hrmaneja 🤝 `,

                  firstParagraph: `Running a successful business could be really draining, from struggling with employees to managing the affairs of the business to maximize profit, life is already difficult so I believe business should not be so difficult. 🥱`,
                  
                  secondParagraph: `Kindly confirm your booking date and time`,

                  thirdParagraph: `${req.body.month}/${req.body.date}/${req.body.year} :: ${req.body.hour}:${req.body.minute}:${req.body.second} ${req.body.meridiem}`,

                  salutation: `Your personal HR manager,`,

                  signature: 'Abasiama',
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
                err.message || "Some error occurred while creating the Demo."
            });
            });
        }
  )
};

// Retrieve all Demo from the database.
exports.findAll = (req, res) => {
    Demo.find()
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

// Find a single Demo with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
   
  Demo.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Demo with id " + id });
      else res.status(200).send(data);
    })
    
    .catch(err => {
        console.log(id);
      res
        .status(500)
        .send({ message: "Error retrieving Demo with id=" + id });
    });
};

// Update a Demo by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Demo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Demo with id=${id}. Maybe Demo was not found!`
        });
      } else res.send({ message: "Demo was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Demo with id=" + id
      });
    });
};

// Delete a Demo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Demo.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Demo with id=${id}. Maybe Demo was not found!`
        });
      } else {
        res.send({
          message: "Demo was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Demo with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  Demo.deleteMany({})
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

// count all companies
exports.count = (req, res) => {
  Demo.countDocuments()
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