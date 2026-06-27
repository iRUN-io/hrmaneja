const express = require('express')
const router = express.Router()
const jobController = require('../controllers/job.controller');

// Retrieve all jobs
router.get('/:company_id', jobController.findAll);

// Create a new job
router.post('/create', jobController.create);

// Retrieve a single job with id
router.get('/details/:id', jobController.findOne);

// Retrive all active jobs
router.get('/active/:company_id', jobController.findAllActiveJobs);

// Update a job with id
router.put('/update/:id', jobController.update);

// Delete a job with id
router.delete("/delete/:id", jobController.delete);

module.exports = router