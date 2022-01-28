import React from 'react';
import AnimalEmoji from './AnimalEmoji';
import './Parade.css';

export default function Parade({ paradeArr, setParade }) {
  return (
    <div>
      <h1>Parade time!</h1>
      {paradeArr.map((animal, i) =>
        <AnimalEmoji key={animal + i} animal={animal} />)}
      <button onClick={() => setParade([...paradeArr, 'gorilla'])}>Gorilla</button>
      <button onClick={() => setParade([...paradeArr, 'zebra'])}>Zebra</button>
      <button onClick={() => setParade([...paradeArr, 'llama'])}>Llama</button>
      <button onClick={() => setParade([...paradeArr, 'tiger'])}>Tiger</button>
      <button onClick={() => setParade([...paradeArr, 'giraffe'])}>Giraffe</button>
    </div>
  );
}

