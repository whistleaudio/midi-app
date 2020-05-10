import React from 'react';
import * as Tone from 'tone';
import { getMidiNote, getScale, getChord } from 'midi-tools';
import './App.css';

function App() {
  const synth = new Tone.PolySynth().toMaster();
  const chord = getChord('a', 4, 'melodic');
  synth.triggerAttackRelease(
    chord.map((noteNumber) => Tone.Frequency(noteNumber, 'midi')),
    '4n',
  );

  return (
    <div className='App'>
      <div>{getMidiNote('a', 4)}</div>
      <div>{JSON.stringify(getScale('a', 4, 'minor'))}</div>
      <div>
        <button onClick={() => Tone.context.resume()}>Play</button>
      </div>
    </div>
  );
}

export default App;
