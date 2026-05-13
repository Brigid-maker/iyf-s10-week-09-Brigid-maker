import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // 1️⃣ Runs after EVERY render
  useEffect(() => {
    console.log('Rendered! Count is:', count);
  });

  // 2️⃣ Runs ONCE on mount
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  // 3️⃣ Runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // 4️⃣ Cleanup on unmount
  useEffect(() => {
    const interval = setInterval(() => console.log('Tick'), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;