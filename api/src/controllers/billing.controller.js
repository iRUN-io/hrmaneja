const db = require("../models");
const Billing = db.billing;

// Create and Save a new Billing
exports.create = async (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 

  // Create a Billing
  const billing = new Billing({
        company_id: req.body.company_id,
        plan: req.body.plan,
        amount: req.body.amount,
        paidBy: req.body.paidBy,
        expiryDate: req.body.expiryDate,
        status: 'active',
  });

  // Save Billing in the database
  billing
    .save(billing)
    .then(data => {
      res.status(200).send({
        status: 200,
        message: "Billing was created successfully.",
        data: data,
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Billing."
      });
    });
};

// Retrieve all Billing from the database.
exports.findAll = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    Billing.find({ company_id: req.params.company_id  })
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

// Find a single Billing with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Billing.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Billing with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Billing with id=" + id });
    });
};

// Update a Billing by the id in the request
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

  Billing.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Billing with id=${id}. Maybe Billing was not found!`
        });
      } else res.send({ message: "Billing was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Billing with id=" + id
      });
    });
};

// Delete a Billing with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Billing.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Billing with id=${id}. Maybe Billing was not found!`
        });
      } else {
        res.send({
          message: "Billing was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Billing with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Billing.deleteMany({})
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

exports.count = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Billing.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalBills: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}