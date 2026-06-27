const express = require('express')
const router = express.Router()
const assetController = require('../../controllers/requisite/asset.controller.js');

// Retrieve all assets
router.get('/', assetController.findAll);

// Create a new asset
router.post('/create', assetController.create);

// Retrieve a single asset with id
router.get('/:id', assetController.findOne);

// Retrieve employee asset
router.get('/employee/:employee_id', assetController.employeeAsset);

// Update a asset with id
router.put('/update/:id', assetController.update);


// Delete a asset with id
router.delete('/delete/:id', assetController.delete);

module.exports = router