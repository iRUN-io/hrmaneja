const express = require('express')
const router = express.Router()
const leaveController = require('../controllers/leave.controller');

// Retrieve all departments
router.get('/:company_id', leaveController.findAll);

// Create a new leave
router.post('/create', leaveController.create);

// Retrieve a single leave with id
router.get('/:id', leaveController.findOne);

// employee leave
router.get('/employee/:id', leaveController.employeeLeave);

// Update a leave with id
router.put('/update/:id', leaveController.update);

// approve leave 
router.put('/approve/:id', leaveController.approve);

// disapprove leave
router.put('/disapprove/:id', leaveController.disapprove);

// Delete a leave with id
router.delete('/delete/:id', leaveController.delete);

module.exports = router