import * as React from 'react';
import {useState, useEffect} from 'react';
import './style.css';

export default function App() {

  return <ExampleComponent />
}

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect function called');
    return () => {
      console.log('Cleanup function called');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
