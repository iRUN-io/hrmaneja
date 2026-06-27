const { mongoose } = require("../models");
const db = require("../models");
const Setting = db.setting;
const employeeController = require('../controllers/employee.controller');
const departmentController = require('../controllers/department.controller');
const leaveController = require('../controllers/leave.controller');
const userController = require('../controllers/user.controller');
const companyController = require('../controllers/company.controller');
const requisitionController = require('../controllers/requisition.controller');
const jobController = require('../controllers/job.controller');
const documentController = require('../controllers/document.controller');
const inventoryController = require('../controllers/inventory.controller');

// Retrieve all Setting from the database.
exports.findAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Setting.find({ company_id: req.params.company_id })
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

// Find a single Setting with an id
exports.findOne = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Setting.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Setting with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Setting with id=" + id });
    });
};

// Update a Setting by the id in the request
exports.updateOrCreate = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Find Setting and update it with the request body
  Setting.findOne({ company_id: req.body.company_id }, {
    company_id: req.body.company_id,
    emailNotificationEnabled: req.body.emailNotificationEnabled,
  }, { new: true })
    .then(data => {
      if (!data) {
        // Create a new Setting
        const setting = new Setting({
          id: new mongoose.Types.ObjectId(),
          company_id: req.body.company_id,
          status: req.body.status,
          emailNotificationEnabled: req.body.emailNotificationEnabled,
          twoFactorEnabled: req.body.twoFactorEnabled,
        });
        // Save Setting in the database
        setting
          .save(setting)
          .then(data => {
            res.status(200).send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Setting."
            });
          });
      } else {
        res.status(200).send(data);
      }
    }
    )
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Setting."
      });
    }
    );
}


// Delete a Setting with the specified id in the request
exports.delete = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Setting.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Setting with id=${id}. Maybe Setting was not found!`
        });
      } else {
        res.send({
          message: "Setting was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Setting with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if(!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Setting.deleteMany({})
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

  // total employees
  exports.totalEmployees = (req, res) => {
    employeeController.count(req, res);
  }

  // total departments
  exports.totalDepartments = (req, res) => {
    departmentController.count(req, res);
  }

  // total leaves
  exports.totalLeaves = (req, res) => {
    leaveController.count(req, res);
  }

  // total users
  exports.totalUsers = (req, res) => {
    userController.count(req, res);
  }

  // total companies
  exports.totalCompanies = (req, res) => {
    companyController.count(req, res);
  }

  // total Requisitions
  exports.totalRequisitions = (req, res) => {
    requisitionController.count(req, res);
  }

    // total Jobs
  exports.totalJobs = (req, res) => {
    jobController.count(req, res);
  }

    // total Jobs
  exports.totalDocuments = (req, res) => {
    documentController.count(req, res);
  }

  exports.totalInventory = (req, res) => {
    inventoryController.count(req, res);
  }
  
