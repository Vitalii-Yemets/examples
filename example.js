const createStore = require('./index').createStore;

function increment(value) {
    return {
        type: 'INCREMENT',
        payload: value
    }
}

function decrement(value) {
    return {
        type: 'DECREMENT',
        payload: value
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, amount: state.amount + action.payload }
        case 'DECREMENT':
            return {...state, amount: state.amount - action.payload }
        default:
            return state;
    }
}

const store = createStore(reducer, { simpleProperty: '', amount: 0 });

store.subscribe(() => {
    console.log('Store state:', store.getState().amount);
});

store.dispatch(increment(1));
store.dispatch(increment(4));
store.dispatch(increment(10));
store.dispatch(decrement(10));