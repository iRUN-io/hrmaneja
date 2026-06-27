const db = require("../models");
const Task = db.task;

// Create and Save a new Task
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
 
  // Create a Task
  const task = new Task({
    due_date: req.body.due_date,
    employee_id: req.body.employee_id,
    employee_name: req.body.employee_name,
    company_id: req.body.company_id,
    note: req.body.note,
    priority: req.body.priority,
    status: 'pending',
  });

  // Save Task in the database
  task
    .save(task)
    .then(data => {
      console.log('data', data)
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('err', err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    });
};

// Retrieve all Task from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Task.find({ company_id: req.params.company_id })
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tasks."
        });
    });
};

// employee task
exports.employeeTask = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Task.find({ employee_id: req.params.employee_id })
    .then(data => {
        const sortedData = data.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving employee tasks."
        });
    });
};

// Find a single Task with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Task.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Task with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Task with id=" + id });
    });
};


// complete task
exports.completed = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { status: 'completed' }, { useFindAndModify: false })
      .then(data => {
          if (!data) {
              res.status(404).send({
                  message: `Cannot update Task with id=${id}. Maybe Task was not found!`
              });
          } else res.status(200).send({ message: "Task was updated successfully." });
      })
      .catch(err => {
          res.status(500).send({
              message: "Error updating Task with id=" + id
          });
      });
  };
  
  // incomplete task
  exports.pending = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Task.findByIdAndUpdate(req.params.id,{ status: 'pending' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Task with id=${id}. Maybe Task was not found!`
            });
        } else res.status(200).send({ message: "Task was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Task with id=" + id
        });
    });
  };

// Update a Task by the id in the request
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

  Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Task with id=${id}. Maybe Task was not found!`
        });
      } else res.send({ message: "Task was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      });
    });
};

  
  // close
  exports.close = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Task.findByIdAndUpdate(req.params.id,{ status: 'closed' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Task with id=${id}. Maybe Task was not found!`
            });
        } else res.status(200).send({ message: "Ticked was closed !" });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Task with id=" + id
        });
    });
  };

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Task.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
        });
      } else {
        res.send({
          message: "Task was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Task.deleteMany({})
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
  Task.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalTasks: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}