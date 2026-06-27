const express = require('express')
const router = express.Router()
const airtimeController = require('../controllers/airtime.controller');

// Retrieve all candidates
router.get('/:company_id', airtimeController.findAll);

// Create a new candidate
router.post('/create', airtimeController.create);

module.exports = router