const express = require('express')
const router = express.Router()
const blogController = require('../controllers/event.controller');

// Retrieve all events
router.get('/active', blogController.findAll);

// Retrieve all backend
router.get('/', blogController.findAllBackend);

// Create a new event
router.post('/create', blogController.create);

// Retrieve a single event with id
router.get('/:id', blogController.findOne);

// like a event with id
router.put('/like/:id', blogController.like);

// unlike a event with id
router.put('/unlike/:id', blogController.unlike);

// Update a event with id
router.put('/update/:id', blogController.update);

// comment a event with id
router.post('/comment/:id', blogController.comment);

// Delete a event with id
router.delete("/delete/:id", blogController.delete);

// publish a event with id
router.put("/publish/:id", blogController.publish);

// unpublish a event with id
router.put("/unpublish/:id", blogController.unpublish);

module.exports = router