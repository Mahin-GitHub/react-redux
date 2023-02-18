import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from '../Redux/Actions';

const Counter = () => {

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounterAction())
    }
    const handleDecrement = () => {
        dispatch(decrementCounterAction())
    }
    const handleReset = () => {
        dispatch(resetCounterAction())
    }
    return (
        <div>
            <h2> Count : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;