const express = require('express')
const router = express.Router()
const demoController = require('../controllers/demo.controller.js');

// Retrieve all demo
router.get('/', demoController.findAll);

// Register new email
router.post('/create', demoController.create);

// Retrieve a single company with id
router.get('/check/:email', demoController.findOne);

// Delete
router.delete('/delete/:id', demoController.delete);

module.exports = router