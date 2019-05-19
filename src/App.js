import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
/*
SOURCES
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3 81’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3 50’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3 23’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3 28’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3 22’
‘https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3 29’
‘https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3 30’
‘https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3 43’
‘https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3 25’
‘https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3 37’
‘https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3 17’
‘https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3 29’
‘https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3 28’
‘https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3 17’
‘https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3 33’
‘https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3 40’
‘https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3 35’
‘https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3 46’
*/
const SOUNDS = [
  {Q:  'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81},
  {W: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87},
  {E: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69},
  {A: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65},
  {S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", KC: 83},
  {D: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68},
  {Z: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90},
  {X: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88},
  {C: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67}
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'You Rock!',
      padColor: 'yellow',
      displayColor: '#002310'
    }
    this.toPlay = null;
    this.playAudio = this.playAudio.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.build = null;
  }
  playAudio(btn) {
    this.setDisplay(parseInt(btn.target.id));
    if(btn.target.id >= 0 && btn.target.id <= 8) {
    this.toPlay = document.getElementById(Object.keys(SOUNDS[btn.target.id])[0])
    this.toPlay.currentTime = 0;
    for(const e in SOUNDS) {
      if(e === btn.target.id) this.url = SOUNDS[btn.target.id][Object.keys(SOUNDS[e])[0]];
      this.toPlay.play();
      }
    }
  }
  setDisplay(hit) {
    if(hit >= 0 && hit <= 8) {
      let rgb = [Math.floor(Math.random()*254),Math.floor(Math.random()*254),Math.floor(Math.random()*254)];
      document.getElementById("display").style.background = `rgb(${rgb[1]},${rgb[0]},${rgb[2]})`
      document.getElementById("view").style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
      document.getElementById(hit).style.background = 'white';
    }
   setTimeout(() => {
     if (hit) {
       document.getElementById(hit).style.background = 'yellow';
     }
    },200)
    let setIt = (theHit) => {
      this.setState({
        display: theHit
      });
    }
    switch(hit) {
      case 0: setIt('Kick'); break;
      case 1: setIt('That snare!'); break;
      case 2: setIt('hat El'); break;
      case 3: setIt('hat'); break;
      case 4: setIt('Impact hit'); break;
      case 5: setIt('Rim'); break;
      case 6: setIt('Funk 1'); break;
      case 7: setIt('Funk 2'); break;
      case 8: setIt('Funk 3'); break;
      default: setIt('You Rock!'); break;
    }
  }
  handleKey = (event) => {
    switch(event.keyCode) {
      case SOUNDS[0].KC:
        this.toPlay = document.getElementById('Q');
        this.toPlay.play();
        this.setDisplay(0)
        break;
      case SOUNDS[1].KC:
        this.toPlay = document.getElementById('W');
        this.toPlay.play();
        this.setDisplay(1);
        break;
      case SOUNDS[2].KC:
        this.toPlay = document.getElementById('E');
        this.toPlay.play();
        this.setDisplay(2);
        break;
      case SOUNDS[3].KC:
        this.toPlay = document.getElementById('A');
        this.toPlay.play();
        this.setDisplay(3);
        break;
      case SOUNDS[4].KC:
        this.toPlay = document.getElementById('S');
        this.toPlay.play();
        this.setDisplay(4);
        break;
      case SOUNDS[5].KC:
        this.toPlay = document.getElementById('D');
        this.toPlay.play();
        this.setDisplay(5);
        break;
      case SOUNDS[6].KC:
        this.toPlay = document.getElementById('Z');
        this.toPlay.play();
        this.setDisplay(6)
        break;
      case SOUNDS[7].KC:
        this.toPlay = document.getElementById('X');
        this.toPlay.play();
        this.setDisplay(7)
        break;
      case SOUNDS[8].KC:
        this.toPlay = document.getElementById('C');
        this.toPlay.play();
        this.setDisplay(8)
        break;
    }

  }
  componentWillMount() {
    this.build = SOUNDS.map( (e,i) => {
      return  <DrumPad index={i} name={Object.keys(e)[0]} playAudio={this.playAudio} src={e[Object.keys(e)[0]]} color={this.state.padColor}/>
    });
  }
  render() {
    return(
    <div id='drum-machine' onClick={this.playAudio} onKeyDown={this.handleKey} tabIndex='0' >
      <Info />
        <div id='display'>
          <h2 className='text-center'>{this.state.display}</h2>
        </div>
        <div id='view'>
          <div id='btn-group' className='text-center'>
             {this.build}
          </div>
        </div>
    </div>
   );
 }
}
const Info = () => {
  return (
    <div id='nav' className='text-center'><h1>Drum Machine</h1></div>
  );
}
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.src = null;
  }
  render() {
    return <div id={this.props.index} className='drum-pad' onClick={this.props.playAudio}
             style={{background: this.props.color}}>
        {this.props.name}
          <Clip className='clip' giveID={this.props.name} source={this.props.src}/>
    </div>
  }
}
class Clip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <audio className ='clip' id={this.props.giveID} src={this.props.source}>
    </audio>
    }
  }

export default App;
