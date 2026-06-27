const express = require('express')
const router = express.Router()
const mailerController = require('../controllers/mailer.controller');

// Send Mail
router.post('/sendMail', mailerController.sendMail);

module.exports = router