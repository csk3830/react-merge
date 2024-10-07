import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './comp.css';

const Comp3 = () => {
    // 다른 컴포넌트로 데이터를 넘길 때 props 도 있지만,
    // path를 사용하여 데이터를 넘길 수 있음.
    // (1) path variable : /comp3/12
    // (2) queryString : /comp3?id=12&name=12

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const idSet = (e) => setId(e.target.value);
    const pwSet = (e) => setPw(e.target.value);

    return (
        <div className='comp3 comp'>
            <div>Comp3.jsx 영역입니다.</div>

            {/* id/pw 입력받고 전송버튼을 클릭하여 Param3.jsx에 출력 */}
            <input type="text" name='id' onChange={idSet}/>
            <input type="text" name='pw' onChange={pwSet} />
            <Link to={{
                pathname : `/param3/${id}/${pw}`
            }}>id/pw 전송
            </Link>
            <br /><br /><br /><hr />

            <Link to='/param/15/kim'>path variable</Link>            
            <br /><br /><br /><hr />

            <Link to={{pathname: '/param/15/kim'}}>path variable param</Link>            
            <br /><br /><br /><hr />

            <Link to='/param?num=1&page=15'>queryString</Link>
            <br /><br /><br /><hr />

            <Link to={
                {
                    pathname:'/param',
                    search:'?num=1&page=15'
                }
            }>queryString params</Link>
            

            

        </div>
    );
};

export default Comp3;