import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Счетчик: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
            <button onClick={() => dispatch({ type: 'INCREMENT_BY_TEN' })}>+10</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_BY_TEN' })}>-10</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Сброс</button>
        </div>
    );
};

export default Counter;
