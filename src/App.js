import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const drumData = [
    {
      id: 1,
      name: 'Heater-1',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      key: 'Q',
      keyCode: 81,
    },
    {
      id: 2,
      name: 'Heater-2',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      key: 'W',
      keyCode: 87,
    },
    {
      id: 3,
      name: 'Heater-3',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      key: 'E',
      keyCode: 69,
    },
    {
      id: 4,
      name: 'Heater-4',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      key: 'A',
      keyCode: 65,
    },
    {
      id: 5,
      name: 'Clap',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      key: 'S',
      keyCode: 83,
    },
    {
      id: 6,
      name: 'Open-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      key: 'D',
      keyCode: 68,
    },
    {
      id: 7,
      name: 'Kick-H',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      key: 'Z',
      keyCode: 90,
    },
    {
      id: 8,
      name: 'Kick',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      key: 'X',
      keyCode: 88,
    },
    {
      id: 9,
      name: 'Closed-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      key: 'C',
      keyCode: 67,
    },
  ];
  const pianoData = [
    {
      id: 1,
      keyCode: 81,
      key: 'Q',
      name: 'Chord-1',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    },
    {
      id: 2,
      keyCode: 87,
      key: 'W',
      name: 'Chord-2',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    },
    {
      id: 3,
      keyCode: 69,
      key: 'E',
      name: 'Chord-3',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    },
    {
      id: 4,
      keyCode: 65,
      key: 'A',
      name: 'Shaker',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    },
    {
      id: 5,
      keyCode: 83,
      key: 'S',
      name: 'Open-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    },
    {
      id: 6,
      keyCode: 68,
      key: 'D',
      name: 'Closed-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    },
    {
      id: 7,
      keyCode: 90,
      key: 'Z',
      name: 'Punchy-Kick',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    },
    {
      id: 8,
      keyCode: 88,
      key: 'X',
      name: 'Side-Stick',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    },
    {
      id: 9,
      keyCode: 67,
      key: 'C',
      name: 'Snare',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    },
  ];
  const audioNames = {
    heaterKit: 'Heater Kit',
    smoothPianoKit: 'Smooth Piano Kit',
  };
  const audioGroups = {
    heaterKit: drumData,
    smoothPianoKit: pianoData,
  };
  const [volume, setVolume] = useState(1);
  const [soundType, setSoundType] = useState('heaterKit');
  const [sounds, setSounds] = useState(audioGroups[soundType]);
  const [isPower, setIsPower] = useState(true);
  const handleClick = () => {
    setIsPower((current) => !current);
  };
  const [soundName, setSoundName] = useState('');

  const stop = () => {
    setIsPower(!isPower);
  };
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  const setKeyVolume = () => {
    const audios = sounds.map((sound) => document.getElementById(sound.key));
    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };
  const KeyboardKey = ({ play, sound: { key, audio, name, keyCode } }) => {
    const handleKeydown = (event) => {
      if (event.keyCode === keyCode) {
        play(key, name);
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', handleKeydown);
    });
    return (
      <button className="drum-pad" onClick={() => play(key, name)}>
        <audio className="clip" id={key} src={audio} />
        <p>
          {name} {key}
        </p>
      </button>
    );
  };

  const Keyboard = ({ play, sounds }) => {
    return sounds.map((sound) => <KeyboardKey play={play} sound={sound} />);
  };

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  const PadControl = ({ changeSounds, volume, handleVolumeChange }) => {
    return (
      <div className="sound-pad">
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button className="sound-change" onClick={changeSounds}>
          Change Sound
        </button>
      </div>
    );
  };
  const changeSounds = () => {
    setSoundName('');
    if (soundType === 'heaterKit') {
      setSoundType('smoothPianoKit');
      setSounds(audioGroups.smoothPianoKit);
    } else {
      setSoundType('heaterKit');
      setSounds(audioGroups.heaterKit);
    }
  };
  return (
    <div className="App">
      {setKeyVolume()}
      <header>
        <h1>Drum Machine</h1>
      </header>
      <div className="container" id="drum-machine">
        <div className="display-pad">
          <Keyboard play={play} sounds={sounds} />
        </div>
        <div className="display-controls">
          <div className="controls-power">
            <p id="display">Power</p>
            <div className="power-shell">
              {/* stops all html activations */}
              <div
                className="power-shell-slider"
                style={{ float: isPower ? 'left' : 'right' }}
                onClick={() => {
                  handleClick();
                  stop();
                }}
              ></div>
            </div>
          </div>
          <div className="controls-display">
            {/* displays clickable events */}
            <p>Instrument</p>
            <p id="display">{soundName || soundName[soundType]}</p>
          </div>
          <div className="controls-sound">
            {/* change sound component */}
            <PadControl
              volume={volume}
              handleVolumeChange={handleVolumeChange}
              changeSounds={changeSounds}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// {
/* <div className="display-pad">
          {/* all drum pads are clickable events */
// }
// {
/* <div className="drum-pad" id="pad-Q heater-1">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              className="clip"
              id="Q"
            ></audio>
            <p>{drumData[0].name}</p>
          </div>
          <div className="drum-pad" id="pad-W heater-2">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              className="clip"
              id="W"
            ></audio>
            "W"
          </div>
          <div className="drum-pad" id="pad-E heater-3">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              className="clip"
              id="E"
            ></audio>
            "E"
          </div>
          <div className="drum-pad" id="pad-A heater-4">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="clip"
              id="A"
            ></audio>
            "A"
          </div>
          <div className="drum-pad" id="pad-S clap">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="clip"
              id="S"
            ></audio>
            "S"
          </div>
          <div className="drum-pad" id="pad-D open-HH">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="clip"
              id="D"
            ></audio>
            "D"
          </div>
          <div className="drum-pad" id="pad-Z kick-h">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="clip"
              id="Z"
            ></audio>
            "Z"
          </div>
          <div className="drum-pad" id="pad-X kick">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="clip"
              id="X"
            ></audio>
            "X"
          </div>
          <div className="drum-pad" id="pad-C closed-HH">
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="clip"
              id="C"
            ></audio>
            "C"
          </div>
        </div> */
// }
// User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

// User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

// User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

// User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

// User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

// User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

// User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
