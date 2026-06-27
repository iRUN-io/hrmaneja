const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blog.controller');

// Retrieve all blogs
router.get('/active', blogController.findAll);

// Retrieve all backend
router.get('/', blogController.findAllBackend);

// Create a new blog
router.post('/create', blogController.create);

// Retrieve a single blog with id
router.get('/:id', blogController.findOne);

// like a blog with id
router.put('/like/:id', blogController.like);

// unlike a blog with id
router.put('/unlike/:id', blogController.unlike);

// Update a blog with id
router.put('/update/:id', blogController.update);

// comment a blog with id
router.post('/comment/:id', blogController.comment);

// Delete a blog with id
router.delete("/delete/:id", blogController.delete);

// publish a blog with id
router.put("/publish/:id", blogController.publish);

// unpublish a blog with id
router.put("/unpublish/:id", blogController.unpublish);

module.exports = router