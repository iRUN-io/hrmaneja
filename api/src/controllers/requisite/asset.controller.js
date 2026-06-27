const db = require("../../models/requisite");
const Asset = db.asset;

// Create and Save a new Asset
exports.create = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

 
  // Create a Asset
  const asset = new Asset({
    name: req.body.name,
    serial: req.body.serial,
    phone: req.body.phone,
    model: req.body.model,
    category: req.body.category,
    department: req.body.department,
    status: 'pending',
  });

  // Save Asset in the database
  asset
    .save(asset)
    .then(data => {
      console.log('data', data)
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('err', err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Asset."
      });
    });
};

// Retrieve all Asset from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Asset.find({ company_id: req.params.company_id })
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving assets."
        });
    });
};

// employee asset
exports.employeeAsset = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
    Asset.find({ employee_id: req.params.employee_id })
    .then(data => {
        const sortedData = data.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        res.status(200).send(sortedData);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving employee assets."
        });
    });
};

// Find a single Asset with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Asset.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Asset with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Asset with id=" + id });
    });
};



// Update a Asset by the id in the request
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

  Asset.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Asset with id=${id}. Maybe Asset was not found!`
        });
      } else res.send({ message: "Asset was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Asset with id=" + id
      });
    });
};

  
// Delete a Asset with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Asset.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Asset with id=${id}. Maybe Asset was not found!`
        });
      } else {
        res.send({
          message: "Asset was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Asset with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Asset.deleteMany({})
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
  Asset.countDocuments()
  .then(data => {
    res.status(200).json({ totalAssets: data });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
}