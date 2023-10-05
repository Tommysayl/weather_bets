import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const weatherToInt = {"Sunny": 1, "MostlySunny": 2, "PartlySunny": 3, "IntermittentClouds": 36, "HazySunshine": 5, "MostlyCloudy": 38, "Cloudy": 7, "Dreary": 8, "Fog": 11, "Showers": 12, "MostlyCloudyShowers": 40, "PartlySunnyShowers": 14, "TStorms": 15, "MostltCloudyTstorm": 42, "PartlySunnyTstorm": 17, "Rain": 18, "Flurries": 19, "MCFlurries": 43, "PSFlurries": 21, "Snow": 22, "MCSnow": 44, "Ice": 24, "Sleet": 25, "FreezingRain": 26, "RainSnow": 29, "Hot": 30, "Cold": 31, "Windy": 32, "Clear": 33, "MostlyClear": 34, "PartlyCloudyN": 35, "IntermittentCloudsN": 37, "HazyMoonlight": 39, "MostlyCloudyN": 41}
const weatherToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Bettor Wins!', 'Draw!', 'Gambler Wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getweather() { // Fun([], UInt)
    const weather = await new Promise(resolveweatherP => {
      this.setState({view: 'Getweather', playable: true, resolveweatherP});
    });
    this.setState({view: 'WaitingForResults', weather});
    return weatherToInt[weather];
  }
  async getWeather() { 
    let isLoaded = false;
    let items = false;
    fetch("http://dataservice.accuweather.com/currentconditions/v1/328328?apikey=uomKsgJIsGnKZG3g4kL3bOH2xiQwfO99&language=en-us&details=true")
      .then(res => res.json())
      .then(
        (result) => {
            isLoaded = true;
            items = result.items;
            console.log(items)

        },
        // Note: it's important to weatherle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
        )

  }
  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playweather(weather) { this.state.resolveweatherP(weather); }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }
  setWager(wager) { this.setState({view: 'Deploy', wager}); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  render() { return renderView(this, DeployerViews); }
}
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Bob(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);