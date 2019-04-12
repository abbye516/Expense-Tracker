const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: Number,
  category: String,
  vendor: String
})
const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;

let trans = new Transaction({
    amount: 10,
    category: "clothes",
    vendor: "castro"
})

console.log(trans)