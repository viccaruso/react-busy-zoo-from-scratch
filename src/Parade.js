import React from 'react';
import AnimalEmoji from './AnimalEmoji';
import './Parade.css';

export default function Parade({ parade, setParade }) {
  return (
    <div>
      <h1>Parade time!</h1>
      {parade.map((animal, i) =>
        <AnimalEmoji key={animal + i} animal={animal} />)}
    </div>
  );
}

