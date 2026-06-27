const db = require("../models");
const Inventory = db.inventory;

// Create and Save a new Inventory
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Inventory
  const inventory = new Inventory({
    name: req.body.name,
    quantity: req.body.quantity,
    company_id: req.body.company_id,
    category: req.body.category,
  });

  // Save Inventory in the database
  inventory
    .save(inventory)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Inventory."
      });
    });
};

// Retrieve all Inventories from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Inventory.find({ company_id: req.params.company_id })
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving inventories."
        });
    });
};

// Retrieve all Categories.
exports.categories = (req, res) => {
    if(!req.headers.authorization) {
      return res.status(401).send({ message: "Unauthorized request" });
    }

    const officeInventoryCategories = [
        { id: 1, name: 'Pens and Writing Instruments' },
        { id: 2, name: 'Paper and Notepads' },
        { id: 3, name: 'Office Furniture' },
        { id: 4, name: 'Office Electronics' },
        { id: 5, name: 'Office Appliances' },
        { id: 6, name: 'Desk Accessories' },
        { id: 7, name: 'Office Decor' },
        { id: 8, name: 'Office Supplies' },
        { id: 9, name: 'Storage and Organization' },
        { id: 10, name: 'Computer Accessories' },
        { id: 11, name: 'Printer Supplies' },
        { id: 12, name: 'Conference Room Supplies' },
        { id: 13, name: 'Breakroom Supplies' },
        { id: 14, name: 'Janitorial Supplies' },
        { id: 15, name: 'Shipping and Mailing Supplies' },
        { id: 16, name: 'Office Safety and Security' },
        { id: 17, name: 'Employee Personal Protective Equipment' },
        { id: 18, name: 'Meeting and Presentation Equipment' },
        { id: 19, name: 'Office Software and Licenses' },
        { id: 20, name: 'Whiteboards and Bulletin Boards' },
        { id: 21, name: 'Office Lighting' },
        { id: 22, name: 'Mailroom Supplies' },
        { id: 23, name: 'Shredders and Accessories' },
        { id: 24, name: 'Office Maintenance and Repairs' },
        { id: 25, name: 'Conference Room Furniture' },
        { id: 26, name: 'Training Room Supplies' },
        { id: 27, name: 'Employee Recognition and Awards' },
        { id: 28, name: 'Travel and Business Expense' },
        { id: 29, name: 'Promotional Items and Swag' },
        { id: 30, name: 'Office Coffee and Beverages' },
        { id: 31, name: 'Office Plants and Greenery' },
        { id: 32, name: 'Art and Decor for Office' },
        { id: 33, name: 'Cleaning and Sanitization Supplies' },
        { id: 34, name: 'Desk and Cubicle Accessories' },
        { id: 35, name: 'Cafeteria and Kitchen Supplies' },
        { id: 36, name: 'Presentation Equipment' },
        { id: 37, name: 'Cable Management Solutions' },
        { id: 38, name: 'Office Headsets and Communication' },
        { id: 39, name: 'Storage Cabinets and Lockers' },
        { id: 40, name: 'Desk Lamps and Lighting' },
        { id: 41, name: 'Office Conference Phones' },
        { id: 42, name: 'Ergonomic Office Furniture' },
        { id: 43, name: 'Facility and Building Maintenance' },
        { id: 44, name: 'Business Cards and Printing' },
        { id: 45, name: 'Office Mirrors and Frames' },
        { id: 46, name: 'Conference Room Furniture' },
        { id: 47, name: 'Training Room Supplies' },
        { id: 48, name: 'Employee Recognition and Awards' },
        { id: 49, name: 'Travel and Business Expense' },
        { id: 50, name: 'Promotional Items and Swag' },
      ];

      res.status(200).send(officeInventoryCategories);
    //   res.status(200).json(officeInventoryCategories);
  };

// Find a single Inventory with an employee Id
exports.findEmployeeInventory = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const employee_id = req.params.employee_id;

  Inventory.find({ employee_id: employee_id }) // Assuming you're using Mongoose or a similar library
    .then(data => {
      if (!data) {
        // If no inventory is found, return a 404 status code and a message
        return res.status(404).send({ message: "Inventory not found for employee id " + employee_id });
      } else {
        // If a inventory is found, return a 200 status code and the inventory data
        return res.status(200).send(data);
      }
    })
    .catch(err => {
      // Handle other errors (e.g., database errors)
      res.status(500).send({ message: "Error retrieving Inventory with employee id=" + employee_id });
    });
};


// Find a single Inventory with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Inventory.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Inventory with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Inventory with id=" + id });
    });
};

// Update a Inventory by the id in the request
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

  Inventory.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Inventory with id=${id}. Maybe Inventory was not found!`
        });
      } else res.status(200).send({ message: "Inventory was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Inventory with id=" + id
      });
    });
};

// Delete a Inventory with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Inventory.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Inventory with id=${id}. Maybe Inventory was not found!`
        });
      } else {
        res.send({
          message: "Inventory was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Inventory with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Inventory.deleteMany({})
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
  Inventory.countDocuments({ company_id: req.params.company_id })
    .then(data => {
      res.status(200).json({ totalInventories: data });
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving ."
      });
    });
}