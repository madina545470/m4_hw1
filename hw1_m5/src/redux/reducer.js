import { createStore } from 'redux';

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: Math.max(0, state.count - 1) }; // Не даем уйти в минус
        case 'INCREMENT_BY_TEN':
            return { ...state, count: state.count + 10 };
        case 'DECREMENT_BY_TEN':
            return { ...state, count: Math.max(0, state.count - 10) }; // Не даем уйти в минус
        case 'RESET':
            return { ...state, count: 0 };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;
