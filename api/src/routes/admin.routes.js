const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin.controller');

// Retrieve all users
router.get('/', adminController.findAll);

// Create a new user
router.post('/create', adminController.create);

// Retrieve a single user with id
router.get('/:id', adminController.findOne);

// Login user with email
router.post('/auth/login', adminController.login);

// Update a user with id
router.put('/update/:id', adminController.update);

// Delete a user with id
router.delete('/delete/:id', adminController.delete);

module.exports = router