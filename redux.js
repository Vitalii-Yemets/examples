module.exports = function createStore(reducer, initialState) {
    let state = initialState;
    const callbacks = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        callbacks.forEach(callback => callback());
    }

    const subscribe = callback => {
        callbacks.push(callback);
        return {
            unsubscribe: () => callbacks = callbacks.filter((cb) => callback !== cb)
        }
    }

    return { getState, dispatch, subscribe };
}