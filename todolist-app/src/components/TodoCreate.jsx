import React from 'react';

const TodoCreate = ({ todo, onChange, onCreate }) => {

    return (
        <div className='todoCreate'>
            <input 
                type="text" 
                name='todo'  
                onChange={onChange}
                value={todo}
            />
            <button onClick={onCreate}>add</button>
        </div>
    );
};

export default TodoCreate;