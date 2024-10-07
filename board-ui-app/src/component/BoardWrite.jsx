import React, { useRef, useState } from 'react';
import './BoardList.css';
import { Link } from 'react-router-dom';
import { boardList } from '../data/data';

const BoardWrite = () => {
    const nextId = useRef(8);
    //오늘 날짜 가져오기
    const today = new Date();
    //날짜 포맷 생성
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`

    const [ boardListTmp,  setBoardListTmp] = useState([...boardList]);

    const [board, setBoard] = useState({
        title: '',
        writer: '',
        contents: '',
        reg_date: formattedDate,
    });
    
    const { title, writer, contents, reg_date } = board;

    const onChange = (e) => {
        const { name, value } = e.target;
        setBoard({
            ...board,
            [name]:value
        });
    } 

    const onCreate = ()=>{
        const b = {
            id: nextId.current,
            title: title,
            writer: writer,
            contents: contents
        };
        setBoardListTmp(boardListTmp.concat(b));
        setBoard({
            title:'',
            writer:'',
            contents:'',
            reg_date: formattedDate
        });
        nextId.current += 1;
    }

    return (
        <div className='boardWrite'>
            <h2>Board Write Page</h2>
            <form action="" className='contents'>
                <div className='wrtCon'>
                    <input type="text" value={reg_date} readOnly className='readonly-input' />
                    <input type="text" name='title'  value={title} placeholder='Title...' className='input-field' onChange={onChange} />
                    <input type="text" name='writer' value={writer} placeholder='Writer...' className='input-field' onChange={onChange} />
                    <textarea  name='contents' value={contents} placeholder='Contents...' className='textarea-field' onChange={onChange} />
                </div>
                <div className='btns'>
                    <Link to={`/`}>
                        <button onClick={onCreate}>Submit</button>
                    </Link>
                    <Link to={`/`}><button>List</button></Link>
                </div>
            </form>

        </div>
    );
};

export default BoardWrite;