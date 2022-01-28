import React from 'react';
import './OpenSign.css';

export default function OpenSign({ isOpen }) {
  if (isOpen) {
    return (
      <div className='sign-div'>
        <p>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>N</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className='sign-div'>
        <p>
          <span>C</span>
          <span>L</span>
          <span>O</span>
          <span>S</span>
          <span>E</span>
          <span>D</span>
        </p>
      </div>
    );
  }
}

