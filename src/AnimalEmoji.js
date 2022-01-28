import React from 'react';
import './AnimalEmoji.css';

export default function AnimalEmoji({ animal }) {
  return (
    <span>
      { animal === 'gorilla' && '🦍'}
      { animal === 'zebra' && '🦓'}
      { animal === 'llama' && '🦙'}
      { animal === 'tiger' && '🐅'}
      { animal === 'giraffe' && '🦒'}
    </span>  
  );
}

