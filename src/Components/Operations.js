import React, { Component } from 'react';

class Operations extends Component {



  render() {
    return (
      <div className="operations-container">
        <div className="input-container">
          <input placeholder="Amount"></input>
          <input placeholder="Vendor"></input>
          <input placeholder="Category"></input>
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
