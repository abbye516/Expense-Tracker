const express = require('express')
const app = express()
const port = process.env.PORT || 6000
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/transactions', { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})



app.get('/transactions', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
// app.post('http://localhost:5000/transaction'), (req, res) =>{
//     res.send("hello")
// }

app.listen(port, () => console.log(`Listening on port ${port}`));
