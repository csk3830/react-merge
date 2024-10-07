import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './BoardList.css';

const BoardList = () => {
    //db에 저장되어 있는 board 요소를 가져오기 => boardList 저장
    const [ boardList, setBoardList ] = useState([]);

    //비동기로 db에 접속하여 select로 가져오기
    const getBoardData = async ()=>{
        try{
            const boards = await axios('/list');
            //const boards = await axios.get('/list');  
            // - get : 데이터 가져올 때 (생략 가능.)
            // - post : 데이터를 보낼 때 (반드시 써야 함.)
            setBoardList(boards.data);
        } catch(e){
            console.log(e)
        }
    }

    // 컴포넌트가 랜더링 될 때, 혹은 업데이트 될 때 실행되는 hooks
    // useEffect(()=>{
    //  function },[deps]);
    //  - function : 실행시킬 함수
    //  - deps : 배열형태로 배열안에서 검사하고자 하는 특정값    

    useEffect(()=>{
        getBoardData();
    },[]);

    //서버에서 데이터를 가져오는 것보다 화면에서 렌더링 되는 속도가 더 빠름
    // 조건을 걸어줘서 error 방지
    if(boardList.length>0){
        return (
            <div className='boardList'>
                <h2>Board List Page</h2>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardList.map(l => (
                            <tr key={l.id}>
                                <td>{l.id}</td>
                                <td>
                                    <Link to={`/detail/${l.id}`}>{l.title}</Link>
                                </td>
                                <td>{l.writer}</td>
                                <td>{l.reg_date.substring(0, l.reg_date.indexOf("T"))}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='mg-top-20'>
                    <Link to={`/write`}><button>글쓰기</button></Link>          
                </div>
            </div>   
        );
    }

};

export default BoardList;