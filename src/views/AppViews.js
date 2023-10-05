import React from 'react';
import Sunny from '../Weather_icons/01-s.png';
const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h2>Web3 Weather Bets</h2>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account.
        If this takes more than a minute, there may be something wrong.
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button onClick={() => parent.selectDeployer()}>
            Bettor
          </button>
          <br /> If you want to set the wager and create your own bet, or
        </p>
        <p>
          <button
            onClick={() => parent.selectAttacher()}
          >Gambler</button>
          <br /> If you want to accept an existing bet, or
        </p>
        <p>
          <button onClick={() => parent.selectOracle()}>
            Oracle
          </button>
          <br /> If you're tonight's designated trustworthy party!
        </p>
      </div>
    );
  }
}

export default exports;
