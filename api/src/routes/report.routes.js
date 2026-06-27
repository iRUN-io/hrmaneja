const express = require("express");
const router = express.Router();
const reportController = require("../controllers/report.controller");

// Retrieve all departments
router.get("/:company_id", reportController.findAll);

// Create a new task
router.post("/create", reportController.create);

// Retrieve a single leave with id
router.get("/details/:id", reportController.findOne);

// employee leave
router.get("/employee/:id", reportController.employeeReport);

// Update a leave with id
router.put("/update/:id", reportController.update);

// Delete a leave with id
router.delete("/delete/:id", reportController.delete);

module.exports = router;
