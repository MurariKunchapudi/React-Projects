import { useState, useEffect, useRef } from 'react';
import './App.css';


const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if(isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  }

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  }

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000)}`.slice(-3);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);
    // return (
    //     <h1>{getHours} : {getMinutes} : {getSeconds} : {getMilliseconds}</h1>
    // )
    return `${getHours} : ${getMinutes} : ${getSeconds} : ${getMilliseconds}`;
  }

  return (
    <div className="App">
      <h4 className="title">Stop Watch</h4>
      <div className="counter"> 
        <h1>{formatTime(time)}</h1>
      </div>
      <div className="buttons">
        <button className="startStopButton" onClick={handleStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
        <button className="resetButton" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
