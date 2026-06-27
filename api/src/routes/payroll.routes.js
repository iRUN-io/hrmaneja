const express = require('express')
const router = express.Router()
const payrollController = require('../controllers/payroll.controller');

// Retrieve all departments
router.get('/:company_id', payrollController.findAll);

// Create a new payroll
router.post('/create', payrollController.create);

// Retrieve a single payroll with id
router.get('/details/:id', payrollController.findOne);

// check payroll status
router.get('/status/:batchId', payrollController.checkPayment);

// Update a payroll with id
router.put('/update/:id', payrollController.update);

// Delete a payroll with id
router.delete('/delete/:id', payrollController.delete);

// retry payroll
router.post('/retryTransfer', payrollController.retryTransfer);

module.exports = router