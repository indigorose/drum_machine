import React from 'react';

const App2 = () => {
  const drumData = [
    {
      place: 1,
      id: 'Heater-1',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      key: 'Q',
      keyCode: 81,
    },
    {
      place: 2,
      id: 'Heater-2',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      key: 'W',
      keyCode: 87,
    },
    {
      place: 3,
      id: 'Heater-3',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      key: 'E',
      keyCode: 69,
    },
    {
      place: 4,
      id: 'Heater-4',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      key: 'A',
      keyCode: 65,
    },
    {
      place: 5,
      id: 'Clap',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      key: 'S',
      keyCode: 83,
    },
    {
      place: 6,
      id: 'Open-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      key: 'D',
      keyCode: 68,
    },
    {
      place: 7,
      id: 'Kick-H',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      key: 'Z',
      keyCode: 90,
    },
    {
      place: 8,
      id: 'Kick',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      key: 'X',
      keyCode: 88,
    },
    {
      place: 9,
      id: 'Closed-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
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
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    },
    {
      place: 2,
      keyCode: 87,
      key: 'W',
      id: 'Chord-2',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    },
    {
      place: 3,
      keyCode: 69,
      key: 'E',
      id: 'Chord-3',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    },
    {
      place: 4,
      keyCode: 65,
      key: 'A',
      id: 'Shaker',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    },
    {
      place: 5,
      keyCode: 83,
      key: 'S',
      id: 'Open-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    },
    {
      place: 6,
      keyCode: 68,
      key: 'D',
      id: 'Closed-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    },
    {
      place: 7,
      keyCode: 90,
      key: 'Z',
      id: 'Punchy-Kick',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    },
    {
      place: 8,
      keyCode: 88,
      key: 'X',
      id: 'Splacee-Stick',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/splacee_stick_1.mp3',
    },
    {
      place: 9,
      keyCode: 67,
      key: 'C',
      id: 'Snare',
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

  const KeyboardKey = ({
    play,
    deactivateAudio,
    sound: { key, audio, id, keyCode },
  }) => {
    const handleKeydown = (event) => {
      if (event.keyCode === keyCode) {
        play(key, id);
      }
      const audio = document.getElementById(key);
      play(key, id);
      deactivateAudio(audio);
    };

    React.useEffect(() => {
      document.addEventListener('keydown', handleKeydown);
    });
    return (
      <button className="drum-pad" onClick={() => play(key, id)}>
        <audio className="clip" id={key} src={audio} />
        <p>
          {id} {key}
        </p>
      </button>
    );
  };

  const Keyboard = ({ sounds, play, power, deactivateAudio }) => (
    <div className="keyboard">
      {power
        ? sounds.map((sound) => (
            <KeyboardKey
              sound={sound}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))
        : sounds.map((sound) => (
            <KeyboardKey
              sound={{ ...sound, audio: '#' }}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))}
    </div>
  );
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
  return (
    <div>
      <Keyboard />
      <PadControl />
    </div>
  );
};

export default App2;
