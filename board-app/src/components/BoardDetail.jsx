import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BoardList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BoardDetail = () => {
    const { id } = useParams();

    //특정 조건을 만족하는 요소의 index를 찾는 함수(findIndex())
    //boardList.findIndex(l => l.id === Number(id));
    //params는 String 으로 값을 가져옴 ==> 따라서 Number로 형변환
    //굳이 findIndex를 사용하는 이유 : id의 값과 index(boardList의 index)가 맞지 않기 때문.

    // const idx = boardList.findIndex(l => l.id === Number(id));
    // console.log(idx);

    // const board=boardList[idx];
    // console.log(board);

    const [ board, setBoard ] = useState(null);

    const getBoard = async ()=>{
        try{
            const res = await axios(`/detail/${id}`);
            //const boards = await axios.get('/list');  
            // - get : 데이터 가져올 때 (생략 가능.)
            // - post : 데이터를 보낼 때 (반드시 써야 함.)
            setBoard(res.data[0]);
        } catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getBoard();
    },[]);

    const onDelete=async ()=>{
        if(window.confirm('정말 삭제 하시겠습니까?')){
            try {
                const res = await axios.post(`/delete/${id}`);
                console.log(res);
                window.location.href ="/list";
            } catch (e) {
                console.log(e);
            }
        }
    }

    if(board != null){
        return (
            <div className='boardDetail'>
                <h2>No.{board.id} / Board Detail Page</h2>
                <div className='btns'>
                    <Link to={`/modify/${board.id}`}><button>Modify</button></Link>
                    {/* <Link to={`/delete/${board.id}`}><button>Remove</button></Link> */}
                    <button onClick={onDelete}>Remove</button>
                    <Link to={`/`}><button>List</button></Link>
                </div>
                <div className='contents'>
                    <h3>{board.title}</h3>
                    <div className='writer'>{board.writer} [{board.reg_date.substring(0, board.reg_date.indexOf("T"))}]</div>
                    <div className='con'>{board.contents}</div>
                </div>
            </div>
        );
    }
};

export default BoardDetail;