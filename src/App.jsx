import React, { useState } from 'react';

// Counter Component
function Counter() {
  const [count, setCount] = useState(0); // State for count

  const handleClick = () => {
    setCount(count + 1); // Increment count
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// App Component
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Counter />
    </div>
  );
}

export default App;
