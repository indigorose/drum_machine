import React from 'react';
import './App.css';
// import { useEffect, useState } from 'react'
const drumData = [
  {
    place: 1,
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    key: 'Q',
    keyCode: 81,
  },
  {
    place: 2,
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    key: 'W',
    keyCode: 87,
  },
  {
    place: 3,
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    key: 'E',
    keyCode: 69,
  },
  {
    place: 4,
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    key: 'A',
    keyCode: 65,
  },
  {
    place: 5,
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    key: 'S',
    keyCode: 83,
  },
  {
    place: 6,
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    key: 'D',
    keyCode: 68,
  },
  {
    place: 7,
    id: 'Kick-H',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    key: 'Z',
    keyCode: 90,
  },
  {
    place: 8,
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    key: 'X',
    keyCode: 88,
  },
  {
    place: 9,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    key: 'C',
    keyCode: 67,
  },
];
const pianoData = [
  {
    place: 1,
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    place: 2,
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    place: 3,
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    place: 4,
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    place: 5,
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    place: 6,
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    place: 7,
    keyCode: 90,
    key: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    place: 8,
    keyCode: 88,
    key: 'X',
    id: 'Splacee-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/splacee_stick_1.mp3',
  },
  {
    place: 9,
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];

const Keyboard = ({ play }) => {
  return drumData.map(({ key, url }) => {
    return (
      <button classname="drum-pad" onClick={() => play(key)}>
        <audio id={key} classname="clip" src={url} />
        {key}
      </button>
    );
  });
};

function App2() {
  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };
  return (
    <div id="drum-machine">
      <div id="display">
        <Keyboard play={play} />
      </div>
    </div>
  );
}
export default App2;
