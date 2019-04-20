const express = require('express')
const router = express.Router()
const Transaction = require('../Models/TransactionModel')

//get all transactions
router.get('/transactions', (req, res) => {
    Transaction.find({}, function(err,transaction){
        res.send(transaction)
    })
});


//push a new transaction to the DB
router.post('/transaction', (req, res) =>{
    // Transaction.find({}, function(err,transaction){
    // })
    let newTransaction = new Transaction(req.body)
    newTransaction.save()
    console.log(req.body)
    // res.send('new trans saved to DB')
    res.end()
})

module.exports = router
