const db = require("../models");
const Requisition = db.requisition;

// Create and Save a new Requisition
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Requisition
  const requisition = new Requisition({
    currency: req.body.currency,
    company_id: req.body.company_id,
    status: req.body.status,
    employee: req.body.employeeName,
    employee_id: req.body.employeeId,
    line_manager_id: req.body.notifyEmployee,
    category: req.body.category,
    dueDate: req.body.dueDate,
    note: req.body.note,
    department: req.body.department,
    amount: req.body.amount
  });

  // Save Requisition in the database
  requisition
    .save(requisition)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Requisition."
      });
    });
};

// Retrieve all Requisition from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Requisition.find({ company_id: req.params.company_id })
    .then(data => {
        const sortedData = data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving requisitions."
        });
    });
};

// approve  requisition
exports.approve = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Requisition.findByIdAndUpdate(id, { status: 'approve' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Requisition with id=${id}. Maybe Requisition was not found!`
            });
        } else res.status(200).send({ message: "Requisition was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Requisition with id=" + id
        });
    });
};

// disapprove requisition
exports.disapprove = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Requisition.findByIdAndUpdate(req.params.id,{ status: 'disapprove' }, { useFindAndModify: false })
  .then(data => {
      if (!data) {
          res.status(404).send({
              message: `Cannot update Requisition with id=${id}. Maybe Requisition was not found!`
          });
      } else res.status(200).send({ message: "Requisition was updated successfully." });
  })
  .catch(err => {
      res.status(500).send({
          message: "Error updating Requisition with id=" + id
      });
  });
};

// employeeRequisition
exports.employeeRequisition = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Requisition.find({ employee_id: req.params.id })
  .then(data => {
    console.log(data)
      res.status(200).send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving employee requisition."
      });
  });
};

// Find a single Requisition with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Requisition.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Requisition with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Requisition with id=" + id });
    });
};

// Update a Requisition by the id in the request
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

  Requisition.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Requisition with id=${id}. Maybe Requisition was not found!`
        });
      } else res.send({ message: "Requisition was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Requisition with id=" + id
      });
    });
};

// Delete a Requisition with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Requisition.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Requisition with id=${id}. Maybe Requisition was not found!`
        });
      } else {
        res.send({
          message: "Requisition was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Requisition with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Requisition.deleteMany({})
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
  Requisition.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalRequisitions: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}
