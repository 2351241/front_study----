// Custom Hooks 커스텀훅스 - 필요한 함수를 직접 만들어서 구현
// input창 관련 코드들을 커스텀훅스인 useInputs를 만들어서 대체해보자.
// 방식은 2가지 : 1) useState 2)useReducer

import React, {useState, useCallback} from 'react'

function useInputs(initialForm){
    const [form, setForm] = useState(initialForm)

    const handleInputChange =useCallback=>(e=>{
        const {name, value} = e.target;
        setForm( from =>({...form, [name]:value}))
    },[])

    const reset = useCallback(()=>setForm(initialForm), [initialForm])

    return [form, handleInputChange, reset]

}

export default useInputs