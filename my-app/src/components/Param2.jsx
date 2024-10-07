import React from 'react';
import './comp.css'
import { useSearchParams } from 'react-router-dom';

const Param2 = () => {

    // useSearchParams() : queryString의 파라미터를 받을 때 사용

    const [params] = useSearchParams();
    console.log(params);

    const search = [...params];
    console.log(search);

    return (
        <div className='param2 comp'>
            <div>Param2.jsx 영역</div>
            {
                search.map(s=>(
                    <h3>{s[0]} : {s[1]}</h3>
                ))
            }
        </div>
    );
};

export default Param2;