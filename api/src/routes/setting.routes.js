const express = require('express')
const router = express.Router()
const settingController = require('../controllers/setting.controller');

// Retrieve all settings
router.get('/:company_id', settingController.findAll);

// Create or update a new setting with id
router.post('/create', settingController.updateOrCreate);

// Retrieve a single setting with id
router.get('/:id', settingController.findOne);

// Delete a setting with id
router.delete('/delete/:id', settingController.delete);

// total employees
router.get('/totalEmployees/:company_id', settingController.totalEmployees);

// total departments
router.get('/totalDepartments/:company_id', settingController.totalDepartments);

// total leaves
router.get('/totalLeaves/:company_id', settingController.totalLeaves);

// total users
router.get('/totalUsers/:company_id', settingController.totalUsers);

// total Requisitions
router.get('/totalRequisitions/:company_id', settingController.totalRequisitions);

// totalJobs
router.get('/totalJobs/:company_id', settingController.totalJobs);

// total documents
router.get('/totalDocuments/:company_id', settingController.totalDocuments);

// total inventory
router.get('/totalInventory/:company_id', settingController.totalInventory);

module.exports = router