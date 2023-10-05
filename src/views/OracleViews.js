import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Oracle">
        <h3>You are the Oracle!</h3>
        <h3>Thank you for your service.</h3>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    console.log(parent);
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the info of the contract that needs your help:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Fetching and distributing some windows for the other players...
      </div>
    );
  }
}


exports.Done = class extends React.Component {
  render() {
    const {result} = this.props;
    return (
      <div>
        Thank you for fetching Data. The actual weather is:
        <br />{result || 'Unknown'}
      </div>
    );
  }
}

export default exports;
