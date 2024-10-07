import React from 'react';

const Todo = ({ todo, onRemove, onToggle }) => {
    return (
        <div className='todoItem'>
            <h3>
                <span 
                    className={`todoItem-text ${!todo.active ? 'completed' : ''}`}
                    onClick={()=> onToggle(todo.id)} 
                >
                    {todo.todo}
                </span>
                {/* function으로 매개변수를 전달할 경우 */}
                <button 
                    className='remove-btn'
                    onClick={()=>onRemove(todo.id)}
                >
                    del
                </button>
            </h3>
        </div>
    );
};

export default Todo;