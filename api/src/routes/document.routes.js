const express = require('express')
const router = express.Router()
const documentController = require('../controllers/document.controller');

// Retrieve all documents
router.get('/:company_id', documentController.findAll);

// Create a new document
router.post('/create', documentController.create);

// Retrieve a single document with id
router.get('/details/:id', documentController.findOne);

// Retrieve a single document with employee id
router.get('/employee/:employee_id', documentController.findEmployeeDocument);

// Update a document with id
router.put('/update/:id', documentController.update);

// Delete a document with id
router.delete("/delete/:id", documentController.delete);

module.exports = router