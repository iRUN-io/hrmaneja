const express = require('express')
const router = express.Router()
const activityController = require('../../controllers/requisite/activity.contoller');

// Retrieve all activities
router.get('/:company_id', activityController.findAll);

// Create a new activity
router.post('/create', activityController.create);

// Retrieve a single activity with id
router.get('/:id', activityController.findOne);

// Retrieve employee activities
router.get('/employee/:employee_id', activityController.userActivity);

// Update a activity with id
router.put('/update/:id', activityController.update);

// Delete a activity with id
router.delete('/delete/:id', activityController.delete);

module.exports = router