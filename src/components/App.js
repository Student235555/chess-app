import '../styles/App.css';
import { Chessboard } from 'react-chessboard';


function App() {
  return (
    <div className="App">
      <div className='chessboard'>
        <Chessboard id="BasicBoard" />
      </div>
    </div>
  );
}

export default App
