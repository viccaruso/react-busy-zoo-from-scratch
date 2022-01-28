import './App.css';
import OpenSign from './OpenSign';
import Parade from './Parade';
import AnimalEmoji from './AnimalEmoji';
import { useState } from 'react';

function App() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [parade, setParade] = useState(['gorilla', 'giraffe', 'zebra']);

  return (
    <div className="App">
      <div className='zoo-open'>
        <OpenSign isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <div className='zoo-parade'>
        <Parade parade={parade} setParade={setParade}/>
      </div>
      <div className='zoo-fight'>
        <AnimalEmoji animal={'zebra'}/>
        <AnimalEmoji animal={'tiger'}/>
      </div>
    </div>
  );
}

export default App;
