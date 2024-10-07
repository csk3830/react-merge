import React, { useState, useEffect} from 'react';
import { boardList } from '../data/data';
import { Link, useParams } from 'react-router-dom';

const BoardModify = () => {
    const { id } = useParams();
    const [boardListTmp, setBoardListTmp] = useState([...boardList]);

    const [board, setBoard] = useState({
        title: '',
        writer: '',
        contents: '',
        reg_date: '',
    });
    const { title, writer, contents, reg_date } = board;

    useEffect(() => {
        const boardId = Number(id);
        setBoard(boardListTmp.find(l => l.id === boardId))
    }, [id, boardListTmp]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setBoard({
            ...board,
            [name]:value
        });
    } 

    const onUpdate = ()=>{
        const updatedList = boardListTmp.map(post => 
            post.id === Number(id) ? { ...board, reg_date } : post
        );
        setBoardListTmp(updatedList);
    }

    return (
        <div className='boardModify'>
            <h2>Board Write Page</h2>
            <form action="" className='contents'>
                <div className='wrtCon'>
                    <input type="text" value={reg_date.substring(0, reg_date.indexOf("T"))} readOnly className='readonly-input' />
                    <input type="text" name='title'  value={title} placeholder='Title...' className='input-field' onChange={onChange} />
                    <input type="text" name='writer' value={writer} placeholder='Writer...' className='input-field' onChange={onChange} />
                    <textarea name='contents' value={contents} placeholder='Content...' className='textarea-field' onChange={onChange} />
                </div>
                <div className='btns'>
                    <Link to={`/`}>
                        <button onClick={onUpdate}>Submit</button>
                    </Link>
                    <Link to={`/`}><button>List</button></Link>
                </div>
            </form>
        </div>
    );
};

export default BoardModify;