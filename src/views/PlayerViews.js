import React from 'react';
import Sunny from '../Weather_icons/01-s.png';
import MostlySunny from '../Weather_icons/02-s.png';
import PartlySunny from '../Weather_icons/03-s.png';
import IntermittentClouds from '../Weather_icons/04-s.png';
import HazySunshine from '../Weather_icons/05-s.png';
import MostlyCloudy from '../Weather_icons/06-s.png';
import Cloudy from '../Weather_icons/07-s.png';
import Dreary from '../Weather_icons/08-s.png';
import Fog from '../Weather_icons/11-s.png';
import Showers from '../Weather_icons/12-s.png';
import MostlyCloudyShowers from '../Weather_icons/13-s.png';
import PartlySunnyShowers from '../Weather_icons/14-s.png';
import TStorms from '../Weather_icons/15-s.png';
import MostltCloudyTstorm from '../Weather_icons/16-s.png';
import PartlySunnyTstorm from '../Weather_icons/17-s.png';
import Rain from '../Weather_icons/18-s.png';
import Flurries from '../Weather_icons/19-s.png';
import MCFlurries from '../Weather_icons/20-s.png';
import PSFlurries from '../Weather_icons/21-s.png';
import Snow from '../Weather_icons/22-s.png';
import MCSnow from '../Weather_icons/23-s.png';
import Ice from '../Weather_icons/24-s.png';
import Sleet from '../Weather_icons/25-s.png';
import FreezingRain from '../Weather_icons/26-s.png';
import RainSnow from '../Weather_icons/29-s.png';
import Hot from '../Weather_icons/30-s.png';
import Cold from '../Weather_icons/31-s.png';
import Windy from '../Weather_icons/32-s.png';
import Clear from '../Weather_icons/33-s.png';
import MostlyClear from '../Weather_icons/34-s.png';
import PartlyCloudyN from '../Weather_icons/35-s.png';
import IntermittentCloudsN from '../Weather_icons/36-s.png';
import HazyMoonlight from '../Weather_icons/37-s.png';
import MostlyCloudyN from '../Weather_icons/38-s.png';
import PCShowersN from '../Weather_icons/39-s.png';
import MCShowersN from '../Weather_icons/40-s.png';
import PCTstormsN from '../Weather_icons/41-s.png';
import MCTstormsN from '../Weather_icons/42-s.png';
import MCFlurriesN from '../Weather_icons/43-s.png';
import MCSnowN from '../Weather_icons/44-s.png';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetWeather = class extends React.Component {
  render() {
    const {parent, playable, weather} = this.props;
    return (
      <div>
        {weather ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <h1>How's the weather in Paris?</h1>
        <div className='weatherGrid'>
        <div className='weather' onClick={() => parent.playWeather('Sunny')}><img src={Sunny}></img><span>Sunny</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Sunny')}><img src={MostlySunny}></img><span>Mostly Sunny</span></div>
        <div className='weather' onClick={() => parent.playWeather('Partly Sunny')}><img src={PartlySunny}></img><span>Partly Sunny</span></div>
        <div className='weather' onClick={() => parent.playWeather('Intermittent Clouds')}><img src={IntermittentClouds}></img><span>Intermittent Clouds</span></div>
        <div className='weather' onClick={() => parent.playWeather('Hazy Sunshine')}><img src={HazySunshine}></img><span>Hazy Sunshine</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy')}><img src={MostlyCloudy}></img><span>Mostly Cloudy</span></div>
        <div className='weather' onClick={() => parent.playWeather('Cloudy')}><img src={Cloudy}></img><span>Cloudy</span></div>
        <div className='weather' onClick={() => parent.playWeather('Dreary (Overcast)')}><img src={Dreary}></img><span>Dreary (Overcast)</span></div>
        <div className='weather' onClick={() => parent.playWeather('Fog')}><img src={Fog}></img><span>Fog</span></div>
        <div className='weather' onClick={() => parent.playWeather('Showers')}><img src={Showers}></img><span>Showers</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ Showers')}><img src={MostlyCloudyShowers}></img><span>Mostly Cloudy with Showers</span></div>
        <div className='weather' onClick={() => parent.playWeather('Partly Sunny w/ Showers')}><img src={PartlySunnyShowers}></img><span>Partly Sunny with Showers</span></div>
        <div className='weather' onClick={() => parent.playWeather('T-Storms')}><img src={TStorms}></img><span>T-Storms</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ T-Storms')}><img src={MostltCloudyTstorm}></img><span>Mostly Cloudy with T-Storms</span></div>
        <div className='weather' onClick={() => parent.playWeather('Partly Sunny w/ T-Storms')}><img src={PartlySunnyTstorm}></img><span>Partly Sunny with T-Storms</span></div>
        <div className='weather' onClick={() => parent.playWeather('Rain')}><img src={Rain}></img><span>Rain</span></div>
        <div className='weather' onClick={() => parent.playWeather('Flurries')}><img src={Flurries}></img><span>Flurries</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ Flurries')}><img src={MCFlurries}></img><span>Mostly Cloudy with Flurries</span></div>
        <div className='weather' onClick={() => parent.playWeather('Partly Sunny w/ Flurries')}><img src={PSFlurries}></img><span>Partly Sunny with Flurries</span></div>
        <div className='weather' onClick={() => parent.playWeather('Snow')}><img src={Snow}></img><span>Snow</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ Snow')}><img src={MCSnow}></img><span>Mostly Cloudy with Snow</span></div>
        <div className='weather' onClick={() => parent.playWeather('Ice')}><img src={Ice}></img><span>Ice</span></div>
        <div className='weather' onClick={() => parent.playWeather('Sleet')}><img src={Sleet}></img><span>Sleet</span></div>
        <div className='weather' onClick={() => parent.playWeather('Freezing Rain')}><img src={FreezingRain}></img><span>Freezing Rain</span></div>
        <div className='weather' onClick={() => parent.playWeather('Rain and Snow')}><img src={RainSnow}></img><span>Rain and Snow</span></div>
        <div className='weather' onClick={() => parent.playWeather('Hot')}><img src={Hot}></img><span>Hot</span></div>
        <div className='weather' onClick={() => parent.playWeather('Cold')}><img src={Cold}></img><span>Cold</span></div>
        <div className='weather' onClick={() => parent.playWeather('Windy')}><img src={Windy}></img><span>Windy</span></div>
        <div className='weather' onClick={() => parent.playWeather('Clear')}><img src={Clear}></img><span>Clear</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Clear')}><img src={MostlyClear}></img><span>Mostly Clear</span></div>
        <div className='weather' onClick={() => parent.playWeather('Partly Cloudy N')}><img src={PartlyCloudyN}></img><span>Partly Cloudy</span></div>
        <div className='weather' onClick={() => parent.playWeather('Intermittent Clouds N')}><img src={IntermittentCloudsN}></img><span>Intermittent Clouds</span></div>
        <div className='weather' onClick={() => parent.playWeather('Hazy Moonlight')}><img src={HazyMoonlight}></img><span>Hazy Moonlight</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy N')}><img src={MostlyCloudyN}></img><span>Mostly Cloudy</span></div>
        <div className='weather' onClick={() => parent.playWeather('Partly Cloudy w/ Showers N')}><img src={PCShowersN}></img><span>Partly Cloudy with Showers</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ Showers N')}><img src={MCShowersN}></img><span>Mostly Cloudy with Showers</span></div>
        <div className='weather' onClick={() => parent.playWeather('Partly Cloudy w/ T-Storms N')}><img src={PCTstormsN}></img><span>Partly Cloudy with T-Storms</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ T-Storms N')}><img src={MCTstormsN}></img><span>Mostly Cloudy with T-Storms</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ Flurries N')}><img src={MCFlurriesN}></img><span>Mostly Cloudy with Flurries</span></div>
        <div className='weather' onClick={() => parent.playWeather('Mostly Cloudy w/ Snow N')}><img src={MCSnowN}></img><span>Mostly Cloudy with Snow</span></div>

        </div>
        


      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {

  render() {
    return (
      <div>
        Waiting for the Oracle to tell us how the weather actually is..
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
