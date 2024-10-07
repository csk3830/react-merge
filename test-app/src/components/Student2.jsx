import React from 'react';

const Student2 = (props) => {

    // 구조 분해 할당 방식
    const {name, age, addr} = props.std;

    return (
        <div className='student2'>
            <h3>{name}({age}) : {addr}</h3>
        </div>
    );
};

export default Student2;