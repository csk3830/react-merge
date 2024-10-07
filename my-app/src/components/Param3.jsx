import React from 'react';
import { useParams } from 'react-router-dom';

const Param3 = () => {
    const {id, pw} = useParams();
    return (
        <div className='param3 comp'>
            <div>Param3.jsx 영역</div>
            <h3>ID:{id}   /   PW:{pw}   </h3>
        </div>
    );


};

export default Param3;