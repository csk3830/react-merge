function Test(){
    // return 밖 영역의 주석
    // 반드시 태그가 닫혀 있어야 함.
    // <input />

    const name = 'React Test Component';

    const style = {
        color: "white",
        backgroundColor: "black",
        fontSize: "48px",
        padding: "16px"
    }

    return(
        <div className="test">
            {/* 주석 */}
            {/* `${변수명}`   =>   {변수명} */}
            <div style={style}>{name}</div>
        </div>
    );
}

export default Test;