import React from 'react';
import { boardList } from '../data/data';
import './BoardList.css';
import {Link} from 'react-router-dom';

const BoardList = () => {
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
};

export default BoardList;