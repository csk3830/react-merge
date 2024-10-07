import React from 'react';
import { useReducer } from 'react';

function reducer(state, action){
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

//위와 같음
// const reducer = (state, action) =>{

// }

const Counter2 = () => {

    const [ count, dispatch ] = useReducer(reducer, 0);

    const increment = () => {
        dispatch({ type : "INCREMENT"});
    }

    return (
        <div className='counter2'>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={ ()=>{dispatch({ type: "DECREMENT" })} }>-</button>
        </div>
    );
};

export default Counter2;