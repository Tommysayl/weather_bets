import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import OracleViews from './views/OracleViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const weatherToInt = {"Sunny": 1, "Mostly Sunny": 2, "Partly Sunny": 3, "Intermittent Clouds": 4, "Hazy Sunshine": 5, "Mostly Cloudy": 6, "Cloudy": 7, "Dreary (Overcast)": 8, "Fog": 11, "Showers": 12, "Mostly Cloudy w/ Showers": 13, "Partly Sunny w/ Showers": 14, "T-Storms": 15, "Mostly Cloudy w/ T-Storms": 16, "Partly Sunny w/ T-Storms": 17, "Rain": 18, "Flurries": 19, "Mostly Cloudy w/ Flurries": 20, "Partly Sunny w/ Flurries": 21, "Snow": 22, "Mostly Cloudy w/ Snow": 23, "Ice": 24, "Sleet": 25, "Freezing Rain": 26, "Rain and Snow": 29, "Hot": 30, "Cold": 31, "Windy": 32, "Clear": 33, "Mostly Clear": 34, "Partly Cloudy N": 35, "Intermittent Clouds N": 36, "Hazy Moonlight": 37, "Mostly Cloudy N": 38, "Partly Cloudy w/ Showers N": 39, "Mostly Cloudy w/ Showers N": 40, "Partly Cloudy w/ T-Storms N": 41, "Mostly Cloudy w/ T-Storms N": 42, "Mostly Cloudy w/ Flurries N": 43, "Mostly Cloudy w/ Snow N": 44}
const intToOutcome = ['Bettor Wins!', 'Draw!', 'Gambler Wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', weather: 'Null', ...defaults};
    console.log(this.state, 'ooo')
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
  await 
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  selectOracle() { this.setState({view: 'Wrapper', ContentView: Oracle}); }
  render() { return renderView(this, AppViews); }
  
  handleForceupdateMethod() {
    this.forceUpdate();
};
  async componentDidUpdate() {
    console.log('Updatone', this.state.weather);
  }
  
}


class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getWeather() { // Fun([], UInt)
    const weather = await new Promise(resolveWeatherP => {
      this.setState({view: 'GetWeather', playable: true, resolveWeatherP});
    });
    this.setState({view: 'WaitingForResults', weather});
    console.log('weather: ', weather, 'weatherToInt: ', weatherToInt[weather]);
    return weatherToInt[weather];
  }

  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playWeather(weather) { this.state.resolveWeatherP(weather);}
}

class Oracle extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
    console.log(this);
  }
  attach(ctcInfoStr) {
    console.log('eddai');
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Oracle(ctc, this);
  }
  prova() {
    console.log('funziona funziona funziona');
    return 1;
  }

  async extractWinner() {
    console.log('we out here!');
    const actualWeather = await new Promise((resolve, reject) =>  {
      let request = new XMLHttpRequest();
      const url = "http://dataservice.accuweather.com/currentconditions/v1/328328?apikey=uomKsgJIsGnKZG3g4kL3bOH2xiQwfO99&language=en-us&details=true"
      request.open("GET", url)
      request.send();
      request.onload = () => {
        console.log(request);
        if (request.status == 200) {
          console.log(JSON.parse(request.response)[0]['WeatherText']);
          var obj = JSON.parse(request.response)
          var actualWeatherIcon = obj[0]['WeatherIcon'];
          resolve(actualWeatherIcon);
        } else {
          console.log(`error ${request.status} ${request.statusText}`);
          reject({statusText: request.status})
        }
      console.log(obj, 'OBJ');
      var actualWeatherIcon1 = obj[0]['WeatherIcon'];
      var actualWeatherText = obj[0]['WeatherText'];
      console.log('actualWeather: ', typeof actualWeatherIcon1, actualWeatherIcon1);
      { this.setState({view: 'Done', result: actualWeatherText}); }
    }
    }); 
    const risultatone = actualWeather;
    console.log('bout to return: ', risultatone, typeof risultatone);
    return risultatone;
}
  render() { return renderView(this, OracleViews); }
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
    this.wager = reach.parseCurrency(this.state.wager);
    console.log(this.wager, 'wager'); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    console.log(this.wager, 'wager2');
    backend.Bettor(ctc, this);
    console.log(ctc);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log(this.wager, 'wager2');
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
    backend.Gambler(ctc, this);
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