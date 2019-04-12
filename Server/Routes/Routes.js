const express = require('express')
const router = express.Router()
const Transaction = require('../Models/TransactionModel')

//get all transactions
router.get('/transactions', (req, res) => {
    // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    res.send('get query working')
});


//push a new transaction to the DB
router.post('/transaction', (req, res) =>{
    res.send("post query working")
})

module.exports = router
