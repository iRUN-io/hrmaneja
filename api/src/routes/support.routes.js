const express = require('express')
const router = express.Router()
const supportController = require('../controllers/support.controller.js');

// Retrieve all departments
router.get('/:company_id', supportController.findAll);

// Create a new payroll
router.post('/create', supportController.create);

// Retrieve a single payroll with id
router.get('/detail/:id', supportController.findOne);

// Update a payroll with id
router.put('/update/:id', supportController.update);

// approve leave 
router.put('/approve/:id', supportController.approve);

// disapprove leave
router.put('/disapprove/:id', supportController.disapprove);

// Delete a payroll with id
router.delete('/delete/:id', supportController.delete);

module.exports = router