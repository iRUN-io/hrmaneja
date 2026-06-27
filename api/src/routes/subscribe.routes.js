const express = require('express')
const router = express.Router()
const subscribeController = require('../controllers/subscribe.controller.js');

// Retrieve all subscribe
router.get('/', subscribeController.findAll);

// Register new email
router.post('/create', subscribeController.create);

// Retrieve a single company with id
router.get('/check/:email', subscribeController.findOne);

// Delete
router.delete('/delete/:id', subscribeController.delete);

// send mail to all subscribers
router.post('/subscriberMail', subscribeController.subscriberMail);

module.exports = router