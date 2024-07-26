import React, { useState } from 'react';

const CounterState: React.FC = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={plus}>+</button>
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default CounterState;
