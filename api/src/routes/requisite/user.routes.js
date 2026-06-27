const express = require('express')
const router = express.Router()
const userController = require('../../controllers/requisite/user.controller.js');

// Retrieve all users
router.get('/', userController.findAll);

// Create a new user
router.post('/create', userController.create);

// Retrieve a single user with id
router.get('/:id', userController.findOne);

// Login user with email
router.post('/auth/login', userController.login);

// Update a user with id
router.put('/update/:id', userController.update);

// Delete a user with id
router.delete('/delete/:id', userController.delete);

// reset password
router.post('/reset-password', userController.resetPassword);

// change password
router.post('/change-password', userController.changePassword);

// confirm token 
router.post('/confirm-token', userController.confirmToken);

module.exports = router