import React from 'react';

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

