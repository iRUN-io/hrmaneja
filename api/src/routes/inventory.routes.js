const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventory.controller');

// Retrieve all inventories
router.get('/:company_id', inventoryController.findAll);

// Create a new inventory
router.post('/create', inventoryController.create);

// Category
router.get('/get/categories', inventoryController.categories);

// Retrieve a single inventory with id
router.get('/details/:id', inventoryController.findOne);

// Retrieve a single inventory with employee id
router.get('/employee/:employee_id', inventoryController.findEmployeeInventory);

// Update a inventory with id
router.put('/update/:id', inventoryController.update);

// Delete a inventory with id
router.delete("/delete/:id", inventoryController.delete);

module.exports = router