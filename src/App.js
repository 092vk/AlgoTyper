import './App.css';
import Home from './components/Home.js';
import PlayGame from './components/PlayGame.js';
import EndGame from './components/EndGame.js';
import {useEffect, useState} from 'react'

function App() {

  const [statusGame,setStatusGame] = useState(null);

  const handleChangeStatusGame=(status)=>{
    setStatusGame(status);
  }

// ---------scoring code --------------------
  let wrong,right;
  const [score,setScore] = useState(null);
  useEffect(()=>{
    if(statusGame == 'playGame'){
      right = 0;
      wrong = 0;
    }
  },[statusGame])

  const handleChangeScore=(type)=>{
    if(type=='right'){
      setScore({
        ...score,
        right : score.right+1
      })
    }else{
      setScore({
        ...score,
        wrong : score.wrong+1
      })
    }
  }
  
// ---------------------------------------------
  let layout;

  switch (statusGame) {
    case 'playGame':
      layout=<PlayGame onchangeScore={handleChangeScore} />      
      break;
    case 'endGame':
      layout = <EndGame />
      break;
    default:
      layout = <Home onGame={handleChangeStatusGame} />
      break;
  }

 
  return (
    <div className='app'>
      {layout}
    </div>
  );
}

export default App;
