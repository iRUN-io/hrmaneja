const { genUUID } = require("../helpers/generateID");
const db = require("../models");
const Event = db.event;

// Create and Save a new Event
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
 
  // Create a Event
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    likes: 0,
    link: req.body.link,
    dislikes: 0,
    comments: [],
    image: req.body.image,
    status: 'published',
    author: req.body.author,
  });

  // Save Event in the database
  event
    .save(event)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Event."
      });
    });
};

// Retrieve all Event from the database.
exports.findAllBackend = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Event.find()
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

exports.findAll = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
      Event.find({ status: 'published' })
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


// Find a single Event with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Event.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(200).send({ status: 404, message: "Not found Event with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(200)
        .send({ status: 404, message: "Error retrieving Event with id=" + id });
    });
};


// publish event
exports.publish = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    const id = req.params.id;
    Event.findByIdAndUpdate(id, { status: 'published' }, { useFindAndModify: false })
      .then(data => {
          if (!data) {
              res.status(404).send({
                  message: `Cannot update Event with id=${id}. Maybe Event was not found!`
              });
          } else res.status(200).send({ message: "Event was updated successfully." });
      })
      .catch(err => {
          res.status(500).send({
              message: "Error updating Event with id=" + id
          });
      });
  };

  
  // unpublished event
  exports.unpublish = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Event.findByIdAndUpdate(req.params.id,{ status: 'unpublished' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Event with id=${id}. Maybe Event was not found!`
            });
        } else res.status(200).send({ message: "Event was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Event with id=" + id
        });
    });
  };

// comment event
exports.comment = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  const commentId = genUUID();
  const commentDate = new Date();
  const comment = { ...req.body, id: commentId, date: commentDate };
  Event.findByIdAndUpdate(id, { $push: { comments: comment } }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({ status: 404, message: `Cannot update Event with id=${id}. Maybe Event was not found!` });
        } else res.status(200).send({ status: 200, data: comment, message: "Event was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({ status: 500, message: "Error updating Event with id=" + id });
    });
};

// like event
exports.like = (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
    }

    const id = req.params.id;
    Event.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    status: 404,
                    message: `Cannot update Event with id=${id}. Maybe Event was not found!`
                });
            } else res.status(200).send({status: 200, message: "Event was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Event with id=" + id
            });
        });
};

// dislike event
exports.unlike = (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
    }

    const id = req.params.id;
    Event.findByIdAndUpdate(id, { $inc: { dislikes: 1 } }, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    message: `Cannot update Event with id=${id}. Maybe Event was not found!`
                });
            } else res.status(200).send({status: 200, message: "Event was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Event with id=" + id
            });
        });
};

// Update a Event by the id in the request
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

  Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found!`
        });
      } else res.send({ message: "Event was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Event with id=" + id
      });
    });
};

  
  // close
  exports.close = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Event.findByIdAndUpdate(req.params.id,{ status: 'closed' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Event with id=${id}. Maybe Event was not found!`
            });
        } else res.status(200).send({ message: "Ticked was closed !" });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Event with id=" + id
        });
    });
  };

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Event.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
        });
      } else {
        res.send({
          message: "Event was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Event with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Event.deleteMany({})
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
  Event.countDocuments()
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