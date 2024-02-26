import { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 0.01);
    }, 100);
  };

  const pauseContinueTimer = () => {
    if (!intervalRef.current) return;
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 100);
    }
  };

  const stopTimer = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>Time: {time.toFixed(2)} s</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseContinueTimer}>{isRunning ? 'Pause' : 'Continue'}</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
