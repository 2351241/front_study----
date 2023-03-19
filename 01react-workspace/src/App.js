import React from 'react'
import ContextSample from './ContextSample'

function App(){

  return(
    <ContextSample/>
  )
}
export default App


// import React from 'react'
// import SmartHome from './SmartHome'
// import './App.css'

// function App(){
//   return(
//     <div className="App-header">
//         <h3>My SmartHome Light</h3>
//         <SmartHome/>
//     </div>
//   )
// }
// export default App




// import React from "react"
// import Game from './Game'

// function App(){
//   return(<Game/>)
// }
// export default App;


// import React from "react"
// import ReducerCounter from "./ReducerCounter"
// import "./App.css";

// function App(){

//   return(
//     <div>

//     <ReducerCounter step={1} min={-3} max={5}/>
//     <ReducerCounter step={5} min={-100} max={100}/>
    
//     </div>
//     )

// }

// export default App;



// // MathQuiz에 useRef와 useEffect의 동시 사용
// import React from 'react'
// import MathQuiz from './MathQuiz'
// import './App.css';

// function App(){
//   return(
//     <MathQuiz/>
//   )
// }
// export default App;



// // useRef와 useEffect의 동시 사용 예제
// import React, {useEffect, useRef} from 'react'
// import Login from './Login'
// import './App.css';


// function App(){
//   const inputRef = useRef()

//   useEffect(()=>{
//     console.log(inputRef)
//     inputRef.current.focus();
//   }, []
//   )
  
//   const loginAlert = () => {
//     alert(`환영합니다. ${inputRef.current.value}`)
//     inputRef.current.focus();
//   }

//   return(
//     <div className="App">
//       <header className="App-header">
//         <input ref = {inputRef} type='text' placeholder='id'/>
//         <input type='text' placeholder='password'/>
//         <button onClick={loginAlert}>Login</button>
//       </header>
//     </div>
//   )
// }

// export default App;



// import './App.css';
// import MemberList from './MemberList';
// import ArrayAdd from './ArrayAdd';
// import React, {useRef, useState, useMemo} from "react";


// function App(){
//   function countActiveUsers(user){
//     console.log("빨간색의 활성상태 유저명수 계산중...")
//     return users.filter(user=> user.active).length;

//     const [inputs, setInputs] = useState({username:'',email:''})
//     const{username, email} =inputs;

//     const handleInputChange = e => {
//       const {name, value} = e.target;
//       setInputs({
//         ...inputs,
//         [name]:value
//       })
//     }
//     const [users, setUsers] = useState([
//             {   id : 1, 
//                 username : 'user1',
//                 email : 'user1@naver.com',
//                 active: true
//             },
//             {
//                 id : 2, 
//                 username : 'user2',
//                 email : 'user2@naver.com',
//                 active: false

//             },
//             {
//                 id : 3, 
//                 username : 'user3',
//                 email : 'user3@naver.com',
//                 active: false

//               }

//             ]);

//             const nextId = useRef(4)
//             const handleCreateClick = () =>{
//               const user={
//                 id: nextId.current, username, email
//               }
//               setUsers(users.concat(user))
//               setInputs({
//                 username:"",
//                 email:""
//               })

//               nextId.current +=1;
//             }
//             const handleDeleteClick = id =>{
//               setUsers(users.filter(user =>user.id!==id));

//               const handleToggleClick = (id) => {
//                 setUsers(users.map(user=>user.id===id?{...user, active: !user.active}:user))
//               }
//               const count = useMemo(()=>countActiveUsers(users),[users]);
             
//               return(
//                 <>
//                 <ArrayAdd username={username}
//                 email={email}
//                 onInputChange={onInputChange}
//                 onCreateClick={onCreateClick}
//                 />

//                 <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>
//                 <div> 활성사용자수 : {count} </div>
//                 </>
//               )
//             }
//   }
// }

// export default App;


// [useReducer 함수로 UserList CreateUser구현]


// import React, {useMemo,useReducer,useRef,useCallback} from 'react';
// import UserList from "./UserList";
// import ArrayAdd from "./ArrayAdd";
// import useInputs from './useInputs'


// function countActiveusers(users){
//   console.log("활성 사용자수를 세는중...")
//   return users.filter(user=>user.active).length;
// }

// const initialState = {
//   // inputs: {username:"", email:""},
//   users: [ { id: 1, username: 'user1', email: 'user1@gmail.com', active: true},
//    {id: 2, username: 'user2', email: 'user2@gmail.com', active: false},
//    {id: 3, username: 'user3', email: 'user3@gmail.com', active: false}
//   ]
// }

//   function reducer(state, action){
//     switch(action.type){
//       // case 'CHANGE_INPUT':
//       //   return{...state, 
//       //           inputs:{...state.inputs, [action.name]: action.value}
//       //   }
//       case 'CREATE_USER':
//         return{inputs: initialState.inputs,
//                users: state.users.concat(action.user)
//         };
//       case 'TOGGLE_USER':
//         return{...state,
//                 users: state.users.map(user=> 
//                   user.id===action.id?{...user, active:!user.active} : user)      
//         };
//       case 'REMOVE_USER':
//         return{...state, users: state.users.filter(user=>user.id !== action.id)};

//       default : 
//         return state;
//     };
//   }

  
  
// function App(){

//   const [state, dispatch] = useReducer(reducer, initialState)

//   const [form, handleInputChange, reset] = useInputs({
//     username:'',
//     email:''
//   }
//   )

//   const {username, email} = form

//   const nextId = useRef(4)
//   const {users} = state;
//   // const {username, email} = state.inputs;


//   // const handleInputChange = useCallback(e=>{
//   //   const {name, value} = e.target;
//   //   dispatch({
//   //     type: 'CHANGE_INPUT',
//   //     name,
//   //     value
//   //   })
//   // }, 
//   // [])
  
// const handleCreateClick = useCallback(()=>{
//     dispatch({type: 'CREATE_USER',
//     user: {
//       id:nextId.current,
//       username,
//       email
//   }
// });
//   reset();
//   nextId.current+=1;
// }, [username, email]
//   )

// const handleToggleClick = useCallback(id => {
//   dispatch(
//     {type: 'TOGGLE_USER',
//     id }
//   )
// },[])


// const handleDeleteClick = useCallback(id => {
//   dispatch({
//     type: 'REMOVE_USER',
//     id
//   })
// },[])

// const count = useMemo(()=>countActiveusers(users))

//   return(
//       <>
//        <ArrayAdd
//           username={username}
//           email={email}
//           onInputChange={handleInputChange}
//           onCreateClick={handleCreateClick}/>
//         <UserList 
//           deleteClick={handleDeleteClick}
//           propUsers={users}
//           toggleClick={handleToggleClick}/>
//           <div> 활성사용자 명수 : {count}</div>
//       </>
//     )
//   }

// export default App;














// // useEffect 예제2

// function App(){

//   return(
//     <Number/>
//   )
// }

// export default App;

// function App(){

//   function countActiveUsers(users){
//     console.log("빨간색의 활성상태 유저명수 계산중...")
//     return users.filter( user=>user.active).length;
//   }

//   const [inputs, setInputs] = useState({username: '', email:''});
//   const {username,email}=inputs;
  
//   const onChange = e => {
//     // e.target은 onchange이벤트가 설정된 input태그를 가리킴
//     const {name, value} = e.target; 
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   }

//   const [users, setUsers] = useState([
//     {
//         id : 1, 
//         username : 'user1',
//         email : 'user1@naver.com'
//     },
//     {
//         id : 2, 
//         username : 'user2',
//         email : 'user2@naver.com'
//     },
//     {
//         id : 3, 
//         username : 'user3',
//         email : 'user3@naver.com'
//       }
//     ]);

//     const nextId = useRef(4)
//     const onCreate = ()=>{
//       const user = {
//         id: nextId.current,
//         username,
//         email
//       };

//       setUsers(users.concat(user))
//       setInputs({
//         username: '',
//         email : ''
//       })

//       nextId.current +=1

//     }

//     const onRemove = id => {
//       setUsers(users.filter(user => user.id !== id))
//     }

//     const count = useMemo(() => countActiveUsers(users), [users]);
//   return(
//     <>
//       <ArrayAdd
//       username={username}
//       email={email}
//       onChange={onChange}
//       onCreate={onCreate}/>

//       <UserList users={users} onRemove={onRemove}/>
//       <div> 활성사용자 수: {count}</div>
//     </>
//     )
// }

// export default App;



// // 10 - UserList1
// function App(){
//   const users = [
//     {
//         id : 1, 
//         username : 'user1',
//         email : 'user1@naver.com'
//     },
//     {
//         id : 2, 
//         username : 'user2',
//         email : 'user2@naver.com'
//     },
//     {
//         id : 3, 
//         username : 'user3',
//         email : 'user3@naver.com'
//     }]

//   return(<UserList1 users={users}/>);
// }

// export default App;



// // 09 - UseRef1
// function App(){
//   return(<UseRef1/>);
// }
// export default App



// // 08 - ArrayAdd
// function App(){
//   return(<ArrayAdd/>);
// }
// export default App



// 07 - ArrayRender2

// function App(){
//   return (<ArrayRender2/>);
// }
// export default App



// // 06 - ArrayRender1
// function App(){
//   return(<ArrayRender1/>);
// }
// export default App;



// //  05 - InputState
// function App(){
//   return (<InputState/>)
// }

// export default App;



// // 04 - counter : 버튼 예제
// function App(){
//   return (<Counter/>)
// }
// export default App;



// 03 - props : 두 컴포넌트 사이에 데이터 전송 테스트

// function App(){
//   return (<Hello name='react' color='red'/>)
// }

// export default App;



// 02 - 컴포넌트 export, import 연습
// function App(){
//   return<MyComponent/>;
// }

// export default App;



// 01 - JSX 테스트
// function App() {

//   const text = 'JSX & React project!'
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {text}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

