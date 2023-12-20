import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  const incrementHandler = () => {
    dispatch({type: 'increment', value: 5})
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement', value: 5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
