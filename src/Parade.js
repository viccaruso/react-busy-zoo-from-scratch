import React from 'react';
import AnimalEmoji from './AnimalEmoji';
import './Parade.css';

export default function Parade({ paradeArr, setParade }) {
  return (
    <div className='parade'>
      <div className='parade-animals'>
        {paradeArr.map((animal, i) =>
          <AnimalEmoji key={animal + i} animal={animal} />)}
      </div>
      <div className='parade-buttons'>
        <label>Add an animal: </label>
        <button onClick={() => setParade([...paradeArr, 'gorilla'])}>Gorilla</button>
        <button onClick={() => setParade([...paradeArr, 'zebra'])}>Zebra</button>
        <button onClick={() => setParade([...paradeArr, 'llama'])}>Llama</button>
        <button onClick={() => setParade([...paradeArr, 'tiger'])}>Tiger</button>
        <button onClick={() => setParade([...paradeArr, 'giraffe'])}>Giraffe</button>
      </div>
    </div>
  );
}

