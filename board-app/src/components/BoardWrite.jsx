import React from 'react';
import './BoardList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const BoardWrite = () => {

    const [board, setBoard] = useState({
        title: '',
        writer: '',
        contents: ''
    });
    
    const { title, writer, contents } = board;

    const onChange = (e) => {
        const { name, value } = e.target;
        setBoard({
            ...board,
            [name]:value
        });
    };
    
    const onReset = ()=>{
        setBoard({ 
            ...board,
            title: '',
            writer: '',
            contents: '' 
        });
    };

    const onCreate = async ()=>{
        //board 객체를 서버로 전송
        //board 객체의 내용중 하나라도 null 이면 안됨.
        if(title === ''){
            alert('title is null!!');
            return;
        }
        if(writer === ''){
            alert('writer is null!!!');
            return;
        }
        if(contents === ''){
            alert('contents is null!!!');
            return;
        }
        if(window.confirm('등록하시겠습니까?')){
            try {
                const res = await axios.post('/write', board);
                console.log(res);
                // if(res.data[0] === 'OK'){
                // }
                //데이터 전송 후 이동
                window.location.href ="/list";
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='boardWrite'>
            <h2>Board Write Page</h2>
            <form action="" className='contents'>
                <div className='wrtCon'>
                    <input type="text" name='title'  value={title} placeholder='Title...' className='input-field' onChange={onChange} />
                    <input type="text" name='writer' value={writer} placeholder='Writer...' className='input-field' onChange={onChange} />
                    <textarea  name='contents' value={contents} placeholder='Contents...' className='textarea-field' onChange={onChange} />
                </div>
                <div className='btns'>
                    <button onClick={onCreate}>Submit</button>
                    <button onClick={onReset}>Init</button>
                    <Link to={`/`}><button>List</button></Link>
                </div>
            </form>

        </div>
    );
};

export default BoardWrite;