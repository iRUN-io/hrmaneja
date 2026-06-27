const express = require('express')
const router = express.Router()
const stableDiffusion = require('../controllers/stableDiffusion.controller.js');

// Create a new task
router.post('/create', stableDiffusion.createImage);

// Retrieve a single task with id
router.post('/getImage', stableDiffusion.getImage);

module.exports = router