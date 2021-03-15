import React from 'react';

export function Counter() {

  const [counter, setCounter] = React.useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        increment
      </button>
    </div>
  )
}