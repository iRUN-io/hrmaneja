const db = require("../models");
const Bookshop = db.bookshop;
const Order = db.order;

// Create and Save a new Bookshop
exports.create = async (req, res) => {

  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 

  // Create a Bookshop
  const bookshop = new Bookshop({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        summary: req.body.summary,
        categories: req.body.categories,
        image: req.body.image,
        status: 'available',
  });

  // Save Bookshop in the database
  bookshop
    .save(bookshop)
    .then(data => {
      res.status(200).send({
        status: 200,
        message: "Book was created successfully.",
        data: data,
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bookshop."
      });
    });
};

// Retrieve all Bookshop from the database.
exports.findAll = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    Bookshop.find()
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

// Find a single Bookshop with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Bookshop.findOne({ _id: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Bookshop with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Bookshop with id=" + id });
    });
};

// Update a Bookshop by the id in the request
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

  Bookshop.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Bookshop with id=${id}. Maybe Bookshop was not found!`
        });
      } else res.send({ message: "Bookshop was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bookshop with id=" + id
      });
    });
};

// Delete a Bookshop with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;
  Bookshop.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Bookshop with id=${id}. Maybe Bookshop was not found!`
        });
      } else {
        res.send({
          message: "Bookshop was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bookshop with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Bookshop.deleteMany({})
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


exports.createOrder = async (req, res) => {

  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 

  // Create an Order
  const order = new Order({
        buyerName: req.body.buyerName,
        buyerPhone: req.body.buyerPhone,
        buyerEmail: req.body.buyerEmail,
        amount: req.body.amount,
        books: req.body.books,
        buyerAddress: req.body.buyerAddress,
        status: 'pending',
  });

  // Save Bookshop in the database
  order
    .save(order)
    .then(data => {
      res.status(200).send({
        status: 200,
        message: "Order was created successfully.",
        data: data,
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating an order."
      });
    });
};

// Retrieve all Bookshop from the database.
exports.findAllOrders = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }
    Order.find()
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

exports.count = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Bookshop.countDocuments()
  .then(data => {
    res.status(200).json({ totalBookshop: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}