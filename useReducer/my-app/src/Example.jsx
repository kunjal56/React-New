import React, { useReducer } from 'react';
import { increment, decrement } from './action';
import reducer from './reducer';
import initialStart from './initialStart';

function Example() {
    const [state, dispatch] = useReducer(reducer, initialStart);

    const handleIncrement = (id) => {
        dispatch(increment(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrement(id));
    };

    
    const total = state.prices.reduce((sum, item) => sum + item.value, 0); // Assuming each item has a 'value' property

    return (
        <div>
           
           {
            state.prices.map(item=>{
           dispatch(decrement(id))
            })

            
           }
           
        </div>
    );
}

export default Example;
