import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Operations from './Components/Operations';
import Transactions from './Components/Transactions';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]

    }

  }
  currentBalance = () => {
    let currentBalance = 0
    this.state.transactions.forEach(transaction => {
      // console.log(transaction.amount)
      currentBalance += transaction.amount
    });
    console.log(`current ballence: ${currentBalance}`)
    return currentBalance
  }
  render() {
    return (
      <Router>
        <div >
          <h1 >Expense Tracker</h1>
          <div>
            Balance: ${this.currentBalance()}
          </div>
          <Route path="/operations" exact render={({ match }) => <Operations match={match} />} />

          <div className="main-container">
            <Transactions transactions={this.state.transactions} />
            <Operations />

          </div>
        </div>
      </Router>
    );
  }
}


export default App;
