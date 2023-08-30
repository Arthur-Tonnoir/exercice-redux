import './App.css';
import './store.js'
import Player from './component/Player';
import {useSelector } from 'react-redux';
import Comparaison from './component/Comparaison';

function App() {

  
  return (
    <div className="App" >
      <Comparaison playerA={useSelector((state) => state.reducer.pointA)} playerB={useSelector((state) => state.reducer.pointB)}/>
      <div>
      <h3>{useSelector((state) => state.reducer.pointA)}</h3>
        <Player name='A'/>
        <h3>{useSelector((state) => state.reducer.pointB)}</h3>
        <Player name='B'/>
      </div>
      <div>
      </div>
    </div>
  )
}

export default App;