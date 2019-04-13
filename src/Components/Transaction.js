import React, { Component } from 'react';

class Transaction extends Component {



    render() {
        let transaction = this.props.transaction
        return (
            <div>
                <div className="transaction-container">
                    <div>{transaction.amount}</div>
                    <div>{transaction.vendor}</div>
                    <div>{transaction.category}</div>
                </div>
            </div>
        );
    }
}


export default Transaction;
