const express = require('express')
const router = express.Router()
const bookshopController = require('../controllers/bookshop.controller');

// Retrieve all departments
router.get('/books', bookshopController.findAll);

router.get('/orders', bookshopController.findAllOrders);

// Create a new bookshop
router.post('/books/create', bookshopController.create);


router.post('/orders/create', bookshopController.createOrder);

// Retrieve a single bookshop with id
router.get('/detail/:id', bookshopController.findOne);

// Update a bookshop with id
router.put('/books/update/:id', bookshopController.update);

// Delete a bookshop with id
router.delete('/books/delete/:id', bookshopController.delete);

module.exports = router