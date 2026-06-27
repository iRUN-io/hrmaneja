const db = require("../models");
const Leave = db.leave;

// Create and Save a new Leave
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Leave
  const leave = new Leave({
    name: req.body.name,
    company_id: req.body.company_id,
    status: req.body.status,
    employee: req.body.employeeName,
    employee_id: req.body.employeeId,
    line_manager_id: req.body.notifyEmployee,
    from: req.body.fromDate,
    to: req.body.toDate,
    reason: req.body.leaveReason,
    leave_type: req.body.leaveType
  });

  // Save Leave in the database
  leave
    .save(leave)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Leave."
      });
    });
};

// Retrieve all Leave from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Leave.find({ company_id: req.params.company_id })
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

// approve  leave
exports.approve = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Leave.findByIdAndUpdate(id, { status: 'approve' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Leave with id=${id}. Maybe Leave was not found!`
            });
        } else res.status(200).send({ message: "Leave was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Leave with id=" + id
        });
    });
};

// disapprove leave
exports.disapprove = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Leave.findByIdAndUpdate(req.params.id,{ status: 'disapprove' }, { useFindAndModify: false })
  .then(data => {
      if (!data) {
          res.status(404).send({
              message: `Cannot update Leave with id=${id}. Maybe Leave was not found!`
          });
      } else res.status(200).send({ message: "Leave was updated successfully." });
  })
  .catch(err => {
      res.status(500).send({
          message: "Error updating Leave with id=" + id
      });
  });
};

// employeeLeave
exports.employeeLeave = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Leave.find({ employee_id: req.params.id })
  .then(data => {
    console.log(data)
      res.status(200).send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving employee leave."
      });
  });
};

// Find a single Leave with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Leave.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Leave with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Leave with id=" + id });
    });
};

// Update a Leave by the id in the request
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

  Leave.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Leave with id=${id}. Maybe Leave was not found!`
        });
      } else res.send({ message: "Leave was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Leave with id=" + id
      });
    });
};

// Delete a Leave with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Leave.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Leave with id=${id}. Maybe Leave was not found!`
        });
      } else {
        res.send({
          message: "Leave was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Leave with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Leave.deleteMany({})
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
  Leave.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalLeaves: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}
