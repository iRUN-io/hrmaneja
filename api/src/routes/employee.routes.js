const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Retrieve all employees
router.get('/:company_id', employeeController.findAll);

// Create a new employee
router.post('/create', employeeController.create);

// Retrieve a single employee with id
router.get('/employee/:id', employeeController.findOne);

// Update a employee with id
router.put('/update/:id', employeeController.update);

// Delete a employee with id
router.delete('/delete/:id', employeeController.delete);

module.exports = router