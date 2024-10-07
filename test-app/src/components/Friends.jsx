import React from 'react';

const Friends = (props) => {

    // 구조 분해 할당 방식
    const {name, phone, addr, job} = props.fri;

    return (
        <div className='friends'>
            <h2>{name}({addr} : {job}) / {phone}</h2>
        </div>
    );
};

export default Friends;