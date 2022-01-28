import React from 'react';
import './Parade.css';

export default function Parade({ parade, setParade }) {
  return (
    <div>
      <h1>Parade time!</h1>
      <p>{parade}</p>
    </div>
  );
}

