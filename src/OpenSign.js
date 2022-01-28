import React from 'react';
import './OpenSign.css';

export default function OpenSign({ isOpen, setIsOpen }) {
  if (isOpen) {
    return (
      <>
        <div className='sign-div'>
          <p>OPEN</p>
        </div>
        <button onClick={() => setIsOpen(false)}>Close the Zoo</button>
      </>
    );
  } else {
    return (
      <>
        <div className='sign-div'>
          <p>CLOSED</p>
        </div>
        <button onClick={() => setIsOpen(true)}>Open the Zoo</button>
      </>
    );
  }
}

