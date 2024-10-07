import React from 'react';
import { boardList } from '../data/data';
import { useParams, Link } from 'react-router-dom';
import './BoardList.css';

const BoardDetail = () => {
    const { id } = useParams();

    //특정 조건을 만족하는 요소의 index를 찾는 함수(findIndex())
    //boardList.findIndex(l => l.id === Number(id));
    //params는 String 으로 값을 가져옴 ==> 따라서 Number로 형변환
    //굳이 findIndex를 사용하는 이유 : id의 값과 index(boardList의 index)가 맞지 않기 때문.

    const idx = boardList.findIndex(l => l.id === Number(id));
    console.log(idx);

    const board=boardList[idx];
    console.log(board);

    return (
        <div className='boardDetail'>
            <h2>No.{board.id} / Board Detail Page</h2>
            <div className='btns'>
                <Link to={`/modify/${board.id}`}><button>Modify</button></Link>
                <button>Remove</button>
                <Link to={`/`}><button>List</button></Link>
            </div>
            <div className='contents'>
                <h3>{board.title}</h3>
                <div className='writer'>{board.writer} [{board.reg_date.substring(0, board.reg_date.indexOf("T"))}]</div>
                <div className='con'>{board.contents}</div>
            </div>
        </div>
    );
};

export default BoardDetail;