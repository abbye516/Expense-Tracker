const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const Transaction = require('./Server/Models/TransactionModel')
const routes = require('./Server/Routes/Routes')
const transactionData = require('./src/dummyData')
const Schema = mongoose.Schema

// app.use(express.static(path.join(__dirname, 'src')))
// app.use(express.static(path.join(__dirname, 'node_modules')))


//testing:: 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//testing:
//app.use(require("body-parser").json());

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/transactions', { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/', routes)

const saveData = () =>{
    for(let transaction of transactionData ){
        let newTransaction = new Transaction (transaction)
        newTransaction.save()
    }
}
// saveData()


app.listen(port, () => console.log(`Listening on port ${port}`));
