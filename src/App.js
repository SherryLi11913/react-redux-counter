import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch(); 

  const increment = () => {
    // dispatch({type: 'INCREMENT'});
    dispatch(actions.increment());
  };

  const decrement = () => {
    // dispatch({type: 'DECREMENT'});
    dispatch(actions.decrement());
  };

  const addBy = (value) => {
    // dispatch({
    //   type: 'ADD',
    //   payload: value,
    // });
    dispatch(actions.addBy(value));
  };

  return (
    <div>
      <h1>Counter </h1>
      <h2>{ counter }</h2>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        Add by:
        <button onClick={() => addBy(10)}>10</button>
        <button onClick={() => addBy(20)}>20</button>
        <button onClick={() => addBy(30)}>30</button>
      </div>
    </div>
  );
}

export default App;
