const express = require('express')
const router = express.Router()
const requisitionController = require('../../controllers/requisition.controller');

// Retrieve all departments
router.get('/:company_id', requisitionController.findAll);

// Create a new requisition
router.post('/create', requisitionController.create);

// Retrieve a single requisition with id
router.get('/details/:id', requisitionController.findOne);

// employee requisition
router.get('/employee/:id', requisitionController.employeeRequisition);

// Update a requisition with id
router.put('/update/:id', requisitionController.update);

// approve requisition 
router.put('/approve/:id', requisitionController.approve);

// disapprove requisition
router.put('/disapprove/:id', requisitionController.disapprove);

// Delete a requisition with id
router.delete('/delete/:id', requisitionController.delete);

module.exports = router