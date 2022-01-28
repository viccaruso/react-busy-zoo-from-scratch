import './App.css';
import OpenSign from './OpenSign';
import Parade from './Parade';
import AnimalEmoji from './AnimalEmoji';
import { useState } from 'react';

function App() {
  // State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <div className='zoo-open'>
        <OpenSign isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <div className='zoo-parade'>
        <Parade />
      </div>
      <div className='zoo-fight'>
        <AnimalEmoji />
        <AnimalEmoji />
      </div>
    </div>
  );
}

export default App;
