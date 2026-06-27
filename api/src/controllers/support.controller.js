const db = require("../models");
const Support = db.support;

// Create and Save a new Support
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const ticketNumber = "HR-TIC-" + Math.random().toString(36).substring(2, 15);   
  // Create a Support
  const support = new Support({
    category: req.body.category,
    employee_id: req.body.employee_id,
    company_id: req.body.company_id,
    ticketId: ticketNumber,
    note: req.body.note,
    status: 'pending',
  });

  // Save Support in the database
  support
    .save(support)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Support."
      });
    });
};

// Retrieve all Support from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Support.find({ company_id: req.params.company_id })
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

// Find a single Support with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Support.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Support with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Support with id=" + id });
    });
};


// approve  leave
exports.approve = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    const id = req.params.id;
    Support.findByIdAndUpdate(id, { status: 'approve' }, { useFindAndModify: false })
      .then(data => {
          if (!data) {
              res.status(404).send({
                  message: `Cannot update Support with id=${id}. Maybe Support was not found!`
              });
          } else res.status(200).send({ message: "Support was updated successfully." });
      })
      .catch(err => {
          res.status(500).send({
              message: "Error updating Support with id=" + id
          });
      });
  };
  
  // disapprove leave
  exports.disapprove = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Support.findByIdAndUpdate(req.params.id,{ status: 'disapprove' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Support with id=${id}. Maybe Support was not found!`
            });
        } else res.status(200).send({ message: "Support was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Support with id=" + id
        });
    });
  };

// Update a Support by the id in the request
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

  Support.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Support with id=${id}. Maybe Support was not found!`
        });
      } else res.send({ message: "Support was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Support with id=" + id
      });
    });
};

// complete 
exports.complete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    const id = req.params.id;
    Support.findByIdAndUpdate(id, { status: 'completed' }, { useFindAndModify: false })
      .then(data => {
          if (!data) {
              res.status(404).send({
                  message: `Cannot update support with id=${id}. Maybe support was not found!`
              });
          } else res.status(200).send({ message: "ticked was marked as successfull." });
      })
      .catch(err => {
          res.status(500).send({
              message: "Error updating support with id=" + id
          });
      });
  };
  
  // close
  exports.close = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Support.findByIdAndUpdate(req.params.id,{ status: 'closed' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Support with id=${id}. Maybe Support was not found!`
            });
        } else res.status(200).send({ message: "Ticked was closed !" });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Support with id=" + id
        });
    });
  };

// Delete a Support with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Support.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Support with id=${id}. Maybe Support was not found!`
        });
      } else {
        res.send({
          message: "Support was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Support with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Support.deleteMany({})
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
  Support.countDocuments({ company_id: req.params.company_id })
  .then(data => {
    res.status(200).json({ totalSupports: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}