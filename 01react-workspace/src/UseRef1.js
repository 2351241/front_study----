import React, {useState, useRef}from "react"

function UseRef1 (){
    const [inputs, setInputs] = useState({ //useState(초기값을 객체형태로 넣음)
        name:'',
        nickname: '',


    })

    const nameInput = useRef();

    const {name, nickname} = inputs; //비구조화할당

    const onChange = e => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
        nameInput.current.focus()
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="칭호" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div> 값: {name} ({nickname}) </div>
        </div>
        
    )
}

export default UseRef1;