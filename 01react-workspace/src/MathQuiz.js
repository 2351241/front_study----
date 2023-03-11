import React, {useState, useRef} from "react"

function MathQuiz (){

    
    const [first, setFirst] = useState(Math.ceil(Math.random()*9))
    const [second, setSecond] = useState(Math.ceil(Math.random()*9))
    const [third, setThird] = useState(Math.ceil(Math.random()*9))
    const [fourth, setFourth] = useState(Math.ceil(Math.random()*9))
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const [result, setResult] = useState('')
    const [result2, setResult2] = useState('')

    const input1 = useRef(null);
    const input2 = useRef(null);

    const multiplySubmitForm = (e)=>{
        // e.preventDefault(); 위 명령어는 적어둔 글씨를 홈페이지 창에 머물게 만드는 기능이다.
        e.preventDefault();
        if(parseInt(value) === first*second){
            setResult('정답입니다.')
            setFirst(Math.ceil(Math.random()*9))
            setSecond(Math.ceil(Math.random()*9))
            setValue('')
            input2.current.focus()
        }
        else{setResult('오답입니다. 다시 시도하세요')
        setValue('')
        input1.current.focus()}
    }

    const multiplySubmitForm2 = (e)=>{
        
        

        // e.preventDefault(); 위 명령어는 적어둔 글씨를 홈페이지 창에 머물게 만드는 기능이다.
        e.preventDefault(); 
        if(parseInt(value2) === third+fourth){
            setResult2('정답입니다.')
            setThird(Math.ceil(Math.random()*9))
            setFourth(Math.ceil(Math.random()*9))
            setValue2('')
        }
        else{setResult2('오답입니다. 다시 시도하세요')
        input2.current.focus()}
        
    }
    
    return(
        <div className = "App-header">
            <h4 style={{color:"lightgreen"}}>Quiz 1</h4>
            <div> {first} x {second} = ? </div>
            <form onSubmit={multiplySubmitForm}>
                <input 
                ref={input1}
                type="number" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}/>
                <button>입력</button>
            </form>
            <h6 style={{color:"red"}}> {result} </h6>

            <h4 style={{color:"lightgreen"}}>Quiz 2</h4>
            <div> {third} + {fourth} = ? </div>
            <form onSubmit={multiplySubmitForm2}>
                <input 
                ref={input2}
                type="number" 
                value2={value2} 
                onChange={(e) => setValue2(e.target.value)}/>
                <button>입력</button>
            </form>
            <h6 style={{color:"red"}}> {result2} </h6>


        </div>
        
    )
}

export default MathQuiz;