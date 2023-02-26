import React, {useState} from "react";

function InputState(){

    // 현재상태를 보여주는 변수. setter 함수(추후값을 업데이트)
    const [text, setText] = useState('');
    const onChange = (e)=>{ 
        console.log(e) // 이벤트함수를 연결한 해당태그 전체를 의미
        // console.log(e.target.value) 
        setText(e.target.value)};
        
       




    const onReset = () => { setText('')}

    return(
        <div>
        <input onChange={onChange} value={text}/>
        <button>초기화</button>
        <div><b>입력값: {text}</b></div>
        </div>
    )
}

export default InputState