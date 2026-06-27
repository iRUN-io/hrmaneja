const express = require('express')
const router = express.Router()
const departmentController = require('../controllers/department.controller');

// Retrieve all departments
router.get('/:company_id', departmentController.findAll);

// Create a new department
router.post('/create', departmentController.create);

// Retrieve a single department with id
router.get('/details/:id', departmentController.findOne);

// Update a department with id
router.put('/update/:id', departmentController.update);

// Delete a department with id
router.delete("/delete/:id", departmentController.delete);

module.exports = router