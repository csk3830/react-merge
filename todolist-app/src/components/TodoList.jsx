import React, { useState, useRef } from 'react';
import TodoCreate from './TodoCreate';
import Todo from './Todo';
import './style.css';


const TodoList = () => {
    const nextId = useRef(0);
    
    const [todos, setTodos] = useState([]);
    const [inputs, setInputs] = useState('');

    const todo = inputs;

    const onChange = (e) =>{
        setInputs(e.target.value);
    }

    const onCreate = ()=>{
        const todo = {
            id: nextId.current,
            todo: inputs,
            active: true
        };

        //현재 users에 user 추가 => concat
        setTodos(todos.concat(todo));

        // 기존 inputs 창 초기화
        setInputs('');

        nextId.current += 1 ;  //ref()  : 재 렌더링이 일어나지 않음.
    }

    const onRemove=(id) =>{
        setTodos(todos.filter(t=>t.id !== id))
    }

    const onToggle=(id)=>{
        setTodos(todos.map(t=>
            t.id === id ? {...t, active: !t.active} : t
        ))
    }

    return (
        <div className='todoList'>
            <h1 className='title'>Todo List</h1>
            <TodoCreate todo={todo} onChange={onChange} onCreate={onCreate} />
                <div className='todoList-items'>
                {todos.map(t=>(
                    <Todo todo={t} key={t.id} onRemove={onRemove} onToggle={onToggle} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;