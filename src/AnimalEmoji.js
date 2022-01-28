import React from 'react';
import './AnimalEmoji.css';

export default function AnimalEmoji({ animal, style }) {
  return (
    <span style={style}>
      { animal === 'gorilla' && '🦍'}
      { animal === 'zebra' && '🦓'}
      { animal === 'llama' && '🦙'}
      { animal === 'tiger' && '🐅'}
      { animal === 'giraffe' && '🦒'}
    </span>  
  );
}

