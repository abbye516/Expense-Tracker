import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("store")
@observer
class Operations extends Component {
  // constructor(){
  //   super()
  //   this.state={
  //     amount:'',
  //     vendor: '',
  //     category: ''

  //   }
  // }
  inputHandler = (e) => {
    // this.setState=({
    //   amount: event.target.value
    // })
    this.props.store.inputHandler(e.target.name, e.target.value)
  }


  render() {
    console.log(this.props.store)
    // console.log(this.props.store.inputHandler)
    return (
      <div className="operations-container">
        <div className="input-container">
          <input
            placeholder="Amount"
            name="amount"
            onChange={this.inputHandler}>
          </input>
          <input
            placeholder="Vendor"
            name="vendor"
            onChange={this.inputHandler}>
          </input>
          <input
            placeholder="Category"
            name='category'
            onChange={this.inputHandler}>
          </input>
        </div>
        <div className="button-container">
          <div className="button" id="deposit-btn">Deposit</div>
          <div className="button" id="withdrawal-btn">Withdraw</div>
        </div>
      </div>
    );
  }
}


export default Operations;
