const express = require('express')
const router = express.Router()
const attendanceController = require('../controllers/attendance.controller');

// Retrieve all attendances
router.get('/:company_id', attendanceController.findAll);

// Create a new attendance
router.post('/create', attendanceController.createOrUpdate);

// Retrieve a single attendance with id
router.get('/employee/:id', attendanceController.findOne);

// Update a attendance with id
router.put('/update/:id', attendanceController.update);

// approval request
router.put('/approveRequest/:id', attendanceController.approveRequest);

// approval request
router.put('/approve/:id', attendanceController.approve);

// Delete a attendance with id
router.delete('/delete/:id', attendanceController.delete);

module.exports = router