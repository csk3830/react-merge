import React, {useState, useRef} from 'react';

const Input2 = () => {
    const [inputs, setInputs] = useState({name:'', nickName:''});

    //useRef : DOM에서 어떤 엘리먼트를 직접 선택해야 할 경우 사용
    const nameInput = useRef();

    //구조 분해 할당
    const {name, nickName} = inputs;

    const textInput = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        const { name, value } = e.target;
        // 변경대상이 아닌 값은 공백처리 => 기존값 유지
        setInputs({
            ...inputs, // 기존 값 복사 ... 스프레드 연산자(배열을 복사)
            [name] : value  //name 키를 가진 값을 value로 변경
        });
    }

    const resetText = ()=>{
        setInputs({ name: '', nickName: '' });
        nameInput.current.focus();
    }

    return (
        <div className='input'>
            <h3>
                name : {name}      / nickName : {nickName} 
            </h3>
            <input type="text" value={name} name='name' placeholder='이름' onChange={textInput} ref={nameInput} />
            <input type="text" value={nickName} name='nickName' placeholder='닉네임' onChange={textInput}/>
            <button onClick={resetText}>초기화</button>
        </div>
    );
};

export default Input2;