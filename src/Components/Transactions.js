import React, { Component } from 'react';
import Transaction from './Transaction';
import { inject, observer } from 'mobx-react'

@inject("store")
@observer
class Transactions extends Component {
    componentDidMount() {
        this.props.store.getTransactions()
    }
    render() {
        // let transactions = this.props.transactions
        let transactions = this.props.store.transactions

        // console.log(transactions)
        return (
            <div >
                <h1>Transactions:</h1>
                <div className="table-headers">
                    <div>Amount</div>
                    <div>Vendor</div>
                    <div>Category</div>
                </div>
                {transactions.map(transaction => {
                    return (
                        <Transaction
                            transaction={transaction}
                        />)
                }
                )
                }

            </div>
        );
    }
}


export default Transactions;
