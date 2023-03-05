import React, {useState, useEffect} from "react";

const Number = () => {

    const [number, setNumber] = useState(0)
    const [name, setName] = useState('변경 전 이름')
    // useEffect(()=>{console.log('hello')})
    // useEffect(()=>{console.log('hello')}, [])
    // useEffect(()=>{console.log('hello')}, [name])

    const counter = () => setNumber(number+1);
    const nameChanger = () => setName('변경 후 이름')



    return(
        <div>
        
            <button onClick={counter}>클릭</button>
            <button onClick={nameChanger}>변경</button>        
            
            <div>{number}</div>
            <div>{name}</div>
        
        </div>
        
        )
}
export default Number;