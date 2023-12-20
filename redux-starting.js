const redux = require('redux');

const counterReducer = (state = { counter:0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + action.value
        }
    } else if(action.type === 'decrement') {
        return {
            counter: state.counter - 2
        }
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment', value: 5 });
store.dispatch({ type: 'decrement' });