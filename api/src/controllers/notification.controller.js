const db = require("../models");
const Notification = db.notification;

// Create and Save a new Notification
exports.create = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Notification
  const notification = new Notification({
    name: req.body.name,
    sender_id: req.body.sender_id,
    receiver_id: req.body.receiver_id,
    hr_id: req.body.hr_id,
    notification: req.body.notification,
    notification_name: req.body.notification_name,
    user: req.body.user,
    company_id: req.body.company_id,
  });

  // Save Notification in the database
  notification
    .save(notification)
    .then((data) => {
      console.log({ data });
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Notification.",
      });
    });
};

// Retrieve all Notification from the database.
exports.findAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Notification.find({ company_id: req.params.company_id })
    .then((data) => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Notifications.",
      });
    });
};

// exports.userNotification = (req, res) => {
//   if (!req.headers.authorization) {
//     return res.status(401).send({ message: "Unauthorized request" });
//   }
//   Notification.find({ receiver_id: req.params.receiver_id })
//     .then((data) => {
//       console.log({ data });
//       if (!data)
//         res.status(404).send({
//           message: "Not found User with id " + id,
//         });
//       else res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({ message: "Error retrieving User with id=" + id });
//     });
// };

// userNotification
exports.userNotification = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Notification.find({ receiver_id: req.params.receiver_id })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving employee Report.",
      });
    });
};
