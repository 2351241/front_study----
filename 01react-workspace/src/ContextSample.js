// // 1. contextAPI 사용하지 않고 여러 컴포넌트를 통해 PROPS 전달하는 방식


// import React from 'react'

// function Child(text3){
//     return <p>{text3}</p>
// }

// function Parent({text2}){
//     return <Child text3={text2}/>
// }

// function GrandParent({text1}){
//     return <Parent text2={text1}/>
// }


// function ContextSample(){
//     return(
//         <GrandParent text1="(1) props에 담은 문장"/>
//     )

// }

// export default ContextSample


// 2. contextAPI 사용해서 PROPS를 사용하는 마지막 컴포넌트에 바로 전달하는 방식

import React, {createContext} from 'react'

const MyContext = createContext('defaultaValue')

function Child({text3}){  
    const text = useContext(MyContext)
    return <p>{text}</p>
}

function Parent(){
    return <Child/>
}

function GrandParent(){
    return <Parent/>
}


function ContextSample(){
    return(
        <MyContext.Provider value ="(1) props에 담은 문장">
        <GrandParent/>
        </MyContext.Provider>
        )

}

export default ContextSample
