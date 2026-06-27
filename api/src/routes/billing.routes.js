const express = require('express')
const router = express.Router()
const billingController = require('../controllers/billing.controller');

// Retrieve all departments
router.get('/:company_id', billingController.findAll);

// Create a new billing
router.post('/create', billingController.create);

// Retrieve a single billing with id
router.get('/detail/:id', billingController.findOne);

// Update a billing with id
router.put('/update/:id', billingController.update);

// Delete a billing with id
router.delete('/delete/:id', billingController.delete);

module.exports = router