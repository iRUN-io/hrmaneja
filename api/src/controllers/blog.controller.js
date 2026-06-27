const { genUUID } = require("../helpers/generateID");
const db = require("../models");
const Blog = db.blog;

// Create and Save a new Blog
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
 
  // Create a Blog
  const blog = new Blog({
    title: req.body.title,
    post: req.body.post,
    category: req.body.category,
    likes: 0,
    dislikes: 0,
    comments: [],
    image: req.body.image,
    status: 'published',
    author: req.body.author,
  });

  // Save Blog in the database
  blog
    .save(blog)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Blog."
      });
    });
};

// Retrieve all Blog from the database.
exports.findAllBackend = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Blog.find()
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
      Blog.find({ status: 'published' })
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


// Find a single Blog with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Blog.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(200).send({ status: 404, message: "Not found Blog with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(200)
        .send({ status: 404, message: "Error retrieving Blog with id=" + id });
    });
};


// publish blog
exports.publish = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, { status: 'published' }, { useFindAndModify: false })
      .then(data => {
          if (!data) {
              res.status(404).send({
                  message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
              });
          } else res.status(200).send({ message: "Blog was updated successfully." });
      })
      .catch(err => {
          res.status(500).send({
              message: "Error updating Blog with id=" + id
          });
      });
  };

  
  // unpublished blog
  exports.unpublish = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Blog.findByIdAndUpdate(req.params.id,{ status: 'unpublished' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
            });
        } else res.status(200).send({ message: "Blog was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Blog with id=" + id
        });
    });
  };

// comment blog
exports.comment = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  const commentId = genUUID();
  const commentDate = new Date();
  const comment = { ...req.body, id: commentId, date: commentDate };
  Blog.findByIdAndUpdate(id, { $push: { comments: comment } }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({ status: 404, message: `Cannot update Blog with id=${id}. Maybe Blog was not found!` });
        } else res.status(200).send({ status: 200, data: comment, message: "Blog was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({ status: 500, message: "Error updating Blog with id=" + id });
    });
};

// like blog
exports.like = (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
    }

    const id = req.params.id;
    Blog.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    status: 404,
                    message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
                });
            } else res.status(200).send({status: 200, message: "Blog was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Blog with id=" + id
            });
        });
};

// dislike blog
exports.unlike = (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
    }

    const id = req.params.id;
    Blog.findByIdAndUpdate(id, { $inc: { dislikes: 1 } }, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(200).send({
                    message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
                });
            } else res.status(200).send({status: 200, message: "Blog was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Blog with id=" + id
            });
        });
};

// Update a Blog by the id in the request
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

  Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
        });
      } else res.send({ message: "Blog was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Blog with id=" + id
      });
    });
};

  
  // close
  exports.close = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    const id = req.params.id;
    Blog.findByIdAndUpdate(req.params.id,{ status: 'closed' }, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
            });
        } else res.status(200).send({ message: "Ticked was closed !" });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Blog with id=" + id
        });
    });
  };

// Delete a Blog with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Blog.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Blog with id=${id}. Maybe Blog was not found!`
        });
      } else {
        res.send({
          message: "Blog was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Blog with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Blog.deleteMany({})
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
  Blog.countDocuments()
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