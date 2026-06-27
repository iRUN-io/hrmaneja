const express = require('express')
const router = express.Router()
const candidateController = require('../controllers/candidate.controller');

// Retrieve all candidates
router.get('/:job_id', candidateController.findAll);

// Create a new candidate
router.post('/create', candidateController.create);

// Retrieve a single candidate with id
router.get('/details/:id', candidateController.findOne);

// Update a candidate with id
router.put('/update/:id', candidateController.update);

// scoreCandidate
router.post('/score/:id', candidateController.scoreCandidate);

// Delete a candidate with id
router.delete("/delete/:id", candidateController.delete);

module.exports = router