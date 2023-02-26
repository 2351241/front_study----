
import './App.css';
import UserList from './UserList';
import ArrayAdd from './ArrayAdd';
import React, {useRef, useState} from "react";

function App(){

  const [inputs, setInputs] = useState({username: '', email:''});
  const {username,email}=inputs;
  
  const onChange = e => {
    // e.target은 onchange이벤트가 설정된 input태그를 가리킴
    const {name, value} = e.target; 
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
        id : 1, 
        username : 'user1',
        email : 'user1@naver.com'
    },
    {
        id : 2, 
        username : 'user2',
        email : 'user2@naver.com'
    },
    {
        id : 3, 
        username : 'user3',
        email : 'user3@naver.com'
      }
    ]);

    const nextId = useRef(4)
    const onCreate = ()=>{
      const user = {
        id: nextId.current,
        username,
        email
      };

      setUsers(users.concat(user))
      setInputs({
        username: '',
        email : ''
      })

      nextId.current +=1

    }


  return(
    <>
      <ArrayAdd
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}/>

      <UserList users={users}/>
    </>
    )
}

export default App;



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

