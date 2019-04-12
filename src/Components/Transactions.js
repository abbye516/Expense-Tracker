import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {



    render() {
        let transactions = this.props.transactions
        console.log(transactions)
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
