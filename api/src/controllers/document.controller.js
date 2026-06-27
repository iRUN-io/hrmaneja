const db = require("../models");
const Document = db.document;

// Create and Save a new Document
exports.create = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Document
  const document = new Document({
    name: req.body.name,
    url: req.body.url,
    company_id: req.body.company_id,
    employee_id: req.body.employee_id,
  });

  // Save Document in the database
  document
    .save(document)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Document.",
      });
    });
};

// Retrieve all Documents from the database.
exports.findAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Document.find({ company_id: req.params.company_id })
    .then((data) => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving documents.",
      });
    });
};

// Find a single Document with an employee Id
exports.findEmployeeDocument = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const employee_id = req.params.employee_id;

  Document.find({ employee_id: employee_id }) // Assuming you're using Mongoose or a similar library
    .then((data) => {
      if (!data) {
        // If no document is found, return a 404 status code and a message
        return res
          .status(404)
          .send({
            message: "Document not found for employee id " + employee_id,
          });
      } else {
        // If a document is found, return a 200 status code and the document data
        return res.status(200).send(data);
      }
    })
    .catch((err) => {
      // Handle other errors (e.g., database errors)
      res
        .status(500)
        .send({
          message: "Error retrieving Document with employee id=" + employee_id,
        });
    });
};

// Find a single Document with an id
exports.findOne = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Document.findOne(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Document with id " + id });
      else res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Document with id=" + id });
    });
};

// Update a Document by the id in the request
exports.update = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Document.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Document with id=${id}. Maybe Document was not found!`,
        });
      } else
        res.status(200).send({ message: "Document was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Document with id=" + id,
      });
    });
};

// Delete a Document with the specified id in the request
exports.delete = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Document.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Document with id=${id}. Maybe Document was not found!`,
        });
      } else {
        res.send({
          message: "Document was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Document with id=" + id,
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Document.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount}  were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all .",
      });
    });
};

exports.count = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Document.countDocuments({ company_id: req.params.company_id })
    .then((data) => {
      res.status(200).json({ totalDocuments: data });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving .",
      });
    });
};
