const express = require('express')
const router = express.Router()
const companyController = require('../controllers/company.controller');

// Retrieve all departments
router.get('', companyController.findAll);

// Create a new company
router.post('/create', companyController.create);

// Retrieve a single company with id
router.get('/:id', companyController.findOne);

// Update a company with id
router.put('/update/:id', companyController.update);

// Update feature of a company with id
router.put('/update-feature/:id', companyController.updateCompanyFeatures);

// verify email
router.get('/verify-email/:token', companyController.verifyEmail);

// resend email
router.post('/resend-confirmation', companyController.resendVerificationEmail);

// Delete a company with id
router.delete('/delete/:id', companyController.delete);

module.exports = router