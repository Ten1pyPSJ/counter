import React, { useReducer } from 'react';

const CounterReducer: React.FC = () => {
  const initialState = { count: 0 };

  function reducer(state: { count: number }, action: { type: string }) {
    switch (action.type) {
      case 'inc':
        return { count: state.count + 1 };
      case 'dec':
        return state.count > 0 ? { count: state.count - 1 } : state;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
    </div>
  );
};

export default CounterReducer;
