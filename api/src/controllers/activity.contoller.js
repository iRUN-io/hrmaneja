const db = require("../models");
const Activity = db.activity;

// Create and Save a new Activity
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Activity
  const activity = new Activity({
    name: req.body.name,
    employee_id: req.body.employee_id,
    activity: req.body.activity,
    activity_name: req.body.activity_name,
    user: req.body.user,
    company_id: req.body.company_id,
  });

  // Save Activity in the database
  activity
    .save(activity)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Activity."
      });
    });
};

// Retrieve all Departments from the database.
exports.findAll = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    Activity.find({ company_id: req.params.company_id })
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


exports.userActivity = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Activity.find({ employee_id: req.params.employee_id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.status(200).send(data);
    }
    )
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
}

// Find a single Activity with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Activity.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Activity with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Activity with id=" + id });
    });
};

// Update a Activity by the id in the request
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

  Activity.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Activity with id=${id}. Maybe Activity was not found!`
        });
      } else res.send({ message: "Activity was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Activity with id=" + id
      });
    });
};

// Delete a Activity with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Activity.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Activity with id=${id}. Maybe Activity was not found!`
        });
      } else {
        res.send({
          message: "Activity was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Activity with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Activity.deleteMany({})
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

// count all Activities from the database.
exports.count = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Activity.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalActivity: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}