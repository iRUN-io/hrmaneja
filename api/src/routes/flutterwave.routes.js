const express = require('express')
const router = express.Router()
const flutterwaveController = require('../controllers/flutterwave.controller');

// bulk transfer
router.post('/bulkTransfer', flutterwaveController.bulkTransfer);

// transfer
router.post('/transfer', flutterwaveController.transfer);

// verify
router.post('/verify', flutterwaveController.verify);

// refund
router.post('/refund', flutterwaveController.refund);

// list
router.post('/list', flutterwaveController.list);

// listRecipients
router.post('/listRecipients', flutterwaveController.listRecipients);

// listTransactions
router.post('/listTransactions', flutterwaveController.listTransactions);

// airtime
router.post('/airtime', flutterwaveController.airtime);

// bulk airtime
router.post('/bulkAirtime', flutterwaveController.bulkAirtime);

// dataBundle
router.post('/dataBundle', flutterwaveController.dataBundle);

// get banks
router.get('/banks', flutterwaveController.getBanks);

//create sub account
router.post('/createSubAccount', flutterwaveController.createSubAccount);

//get sub account balance
router.get('/accountBalance/:account_ref', flutterwaveController.getSubAccountBalance);

//get transactions 
router.get('/accountTransactions/:account_ref', flutterwaveController.getSubAccountTransactions);

// get sub account
router.get('/getAccount/:account_ref', flutterwaveController.getSubAccount);


router.get('/getSubAccounts', flutterwaveController.getSubAccounts);

module.exports = router;







