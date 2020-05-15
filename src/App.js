import React from 'react';
import * as Tone from 'tone';
import { getMidiNote, getScale, getChord } from 'midi-tools';
import './App.css';

function App() {
  const synth = new Tone.PolySynth().toMaster();
  const chord = getChord('a', 3, 'melodic', 4);
  console.log(chord);

  chord.map((noteNumber, index) =>
    synth.triggerAttackRelease(
      Tone.Frequency(noteNumber, 'midi'),
      '4n',
      (index + 1) / 4,
    ),
  );

  return (
    <div className='App'>
      <div>{JSON.stringify(chord)}</div>
      <div>
        <button onClick={() => Tone.context.resume()}>Play</button>
      </div>
    </div>
  );
}

export default App;
