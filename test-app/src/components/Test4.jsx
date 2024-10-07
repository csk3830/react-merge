import React from 'react';

// const Test4 = (props) => {
//     return (
//         <div className='test4'>
//             <h1 style={{color: props.color}}>Hello~!! {props.name}</h1>
//         </div>
//     );
// };

// 구조 분해 할당 방식
const Test4 = ({name, color}) => {
    return(
        <div className='test4'>
            <h1 style={{color}}>Hello~!! {name}</h1>
        </div>
    );
};

//props를 지정하고 값이 들어오지 않은 경우 빈 값으로 처리
// null, undefined, ""   =>  "" 빈값으로 표현
//defaultProps로 기본값 설정

Test4.defaultProps = {
    name: '손님'
}

export default Test4;