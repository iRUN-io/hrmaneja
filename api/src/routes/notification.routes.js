const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");

// Retrieve all notification
router.get("/:company_id", notificationController.findAll);

// Retrieve employee notification
router.get("/employee/:employee_id", notificationController.userNotification);

// Create a new notification
router.post("/create", notificationController.create);

module.exports = router;
