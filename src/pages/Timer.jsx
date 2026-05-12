import { useState, useEffect } from 'react';
import Button from '../components/shared/Button';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [isRunning]);

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-3xl font-bold text-gray-800">Timer</h1>

      <div className="text-8xl font-mono font-bold text-blue-600">
        {String(Math.floor(seconds / 60)).padStart(2, '0')}:
        {String(seconds % 60).padStart(2, '0')}
      </div>

      <div className="flex gap-4">
        {!isRunning ? (
          <Button variant="primary" size="large" onClick={() => setIsRunning(true)}>
            Start
          </Button>
        ) : (
          <Button variant="danger" size="large" onClick={() => setIsRunning(false)}>
            Stop
          </Button>
        )}
        <Button variant="secondary" size="large" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
}