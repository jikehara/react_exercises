import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <h3>Counter: { props.counter }</h3>
      <button onClick={()=> props.increaseCounter()}>Increase Counter</button>
      <button onClick={()=> props.decreaseCounter()}>Decrease Counter</button>
    </div>
  )
}

export default Counter;
