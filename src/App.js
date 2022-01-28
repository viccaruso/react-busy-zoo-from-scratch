import './App.css';
import OpenSign from './OpenSign';
import Parade from './Parade';
import AnimalEmoji from './AnimalEmoji';

function App() {
  return (
    <div className="App">
      <div className='zoo-open'>
        <OpenSign />
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
