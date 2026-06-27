const db = require("../models");
const Attendance = db.attendance;

// create or update attendance by checking if company_id and employee_id exists
exports.createOrUpdate = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }

  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // if attendance month and week exists, update
  Attendance.findOne({ company_id: req.body.company_id, employee_id: req.body.employee_id})
    .then(data => {
      if (!data) {
        // Create a Attendance
        const attendance = new Attendance({
          employee_id: req.body.employee_id,
          company_id: req.body.company_id,
          timeSheet: req.body.timeSheet,
          date: req.body.date,
          month: req.body.month,
          week: req.body.week,
          year: req.body.year,
          status: 'pending',
        });

        // Save Attendance in the database
        attendance
          .save(attendance)
          .then(data => {
            res.status(200).send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: err.message || "Some error occurred while creating the Attendance."
            });
          });
      } else {
        // update Attendance in the database
        Attendance.updateOne({ company_id: req.body.company_id, employee_id: req.body.employee_id  }, { $set: { timeSheet: req.body.timeSheet } })
          .then(data => {
            console.log('data', data)
            res.status(200).send(data);
          })
          .catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while updating the Attendance." });
          });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving Attendance." });
    });
};

// Retrieve all Departments from the database.
exports.findAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Attendance.find()
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

// Find a single Attendance with an id
exports.findOne = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Attendance.find({ employee_id: req.params.id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Attendance with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Attendance with id=" + id });
    });
};

// approve  request
exports.approveRequest = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Attendance.findByIdAndUpdate(id, { status: 'submitted' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Attendance with id=${id}. Maybe Attendance was not found!`
            });
        } else res.status(200).send({ message: "Attendance was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Attendance with id=" + id
        });
    });
};

// approve attendance
exports.approve = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Attendance.findByIdAndUpdate(id, { status: 'approved' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Attendance with id=${id}. Maybe Attendance was not found!`
            });
        } else res.status(200).send({ message: "Attendance was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Attendance with id=" + id
        });
    });
};

// Update a Attendance by the id in the request
exports.update = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Attendance.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Attendance with id=${id}. Maybe Attendance was not found!`
        });
      } else res.send({ message: "Attendance was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Attendance with id=" + id
      });
    });
};

// Delete a Attendance with the specified id in the request
exports.delete = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Attendance.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Attendance with id=${id}. Maybe Attendance was not found!`
        });
      } else {
        res.send({
          message: "Attendance was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Attendance with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Attendance.deleteMany({})
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
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Attendance.countDocuments({ company_id: req.params.company_id })
    .then(data => {
      res.status(200).json({ totalAttendance: data });
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
}