import { observable, computed, action } from 'mobx'
import axios from 'axios';

class operationStore {
    @observable transactions = []
    @observable currentBalance = 0
    @observable amount
    @observable vendor
    @observable category
    //used input handler to update state of expenses being entered
    @action inputHandler = (name, value) => {
        this[name] = value
    }

    @action getTransactions = async () => {
        this.transactions = []
        let transactions = await axios.get('http://localhost:8000/transactions')
        this.transactions = transactions.data
        console.log(transactions.data)
        return this.transactions
    }
    @action createtransaction = async () => {
        if (this.amount !== "" && this.vendor !== "" && this.category !== "" && !isNaN(this.amount)) {
            await axios.post('http://localhost:8000/transaction', {
                amount: this.amount,
                category: this.category,
                vendor: this.vendor
            })
            alert('added transaction')
        }
        else {
            alert(`all values must be filled in or input integers only`)
        }
        //calling this function to update any transactions added
        this.getTransactions()
    }
    @computed get getCurrentBalance ()  {
        this.transactions.forEach(transaction => this.currentBalance += transaction.amount)
        return this.currentBalance 
    }
}

export default new operationStore()