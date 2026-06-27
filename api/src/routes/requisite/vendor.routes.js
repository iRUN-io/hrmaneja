const express = require('express')
const router = express.Router()
const vendorController = require('../../controllers/requisite/vendor.controller.js');

// Retrieve all vendors
router.get('/', vendorController.findAll);

// Create a new vendor
router.post('/create', vendorController.create);

// Retrieve a single vendor with id
router.get('/:id', vendorController.findOne);

// Retrieve employee vendor
router.get('/employee/:employee_id', vendorController.employeeVendor);

// Update a vendor with id
router.put('/update/:id', vendorController.update);


// Delete a vendor with id
router.delete('/delete/:id', vendorController.delete);

module.exports = router