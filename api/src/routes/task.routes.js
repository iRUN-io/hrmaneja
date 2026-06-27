const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task.controller.js');

// Retrieve all departments
router.get('/:company_id', taskController.findAll);

// Create a new task
router.post('/create', taskController.create);

// Retrieve a single task with id
router.get('/:id', taskController.findOne);

// Retrieve employee task
router.get('/employee/:employee_id', taskController.employeeTask);

// Update a task with id
router.put('/update/:id', taskController.update);

// approve leave 
router.put('/completed/:id', taskController.completed);

// disapprove leave
router.put('/pending/:id', taskController.pending);

// Delete a task with id
router.delete('/delete/:id', taskController.delete);

module.exports = router