import './App.css';
import OpenSign from './OpenSign';
import Parade from './Parade';
import AnimalEmoji from './AnimalEmoji';
import { useState } from 'react';

function App() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [paradeArr, setParade] = useState(['gorilla', 'giraffe', 'zebra']);
  const [emojiASize, setEmojiASize] = useState(3);
  const [emojiBSize, setEmojiBSize] = useState(3);

  const emojiAStyle = { fontSize: `${emojiASize}rem` };
  const emojiBStyle = { fontSize: `${emojiBSize}rem` };

  return (
    <div className="App">
      <div className='zoo-open'>
        <OpenSign isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <div className='zoo-parade'>
        <Parade paradeArr={paradeArr} setParade={setParade}/>
      </div>
      <div className='zoo-fight'>
        <AnimalEmoji animal={'zebra'} style={emojiAStyle} />
        <button onClick={() => setEmojiBSize(emojiBSize / 1.25)}>Attack!</button>
        <button onClick={() => setEmojiASize(emojiASize * 1.25)}>Eat</button>
        <AnimalEmoji animal={'tiger'} style={emojiBStyle}/>
        <button onClick={() => setEmojiASize(emojiASize / 1.25)}>Attack!</button>
        <button onClick={() => setEmojiBSize(emojiBSize * 1.25)}>Eat</button>
      </div>
    </div>
  );
}

export default App;
