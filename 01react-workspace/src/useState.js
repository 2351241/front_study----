// useMemo(), useCallback(), React.memo() 예제 
import React,{useState, useRef, useMemo, useCallback} from "react";
import UserList from './UserList';
import ArrayAdd from './ArrayAdd';

function App(){

  function countActiveUsers(users){
    console.log("빨간색의 활성상태 유저명수 계산중...")
    return users.filter(user=> user.active).length;
  }

  const [inputs, setInputs] = useState({username: "", email:""})
  const{username, email} = inputs;
 
  const handleInputChange = useCallback( e => {
          // e.target은 onChange이벤트가 설정된 input태그를 가리킴
          const {name, value} = e.target; 
          setInputs({
            ...inputs,
            [name]: value 
          })
         }, [inputs]
  )

  const [users, setUsers] = useState([
    { 
      id: 1,
      username: 'user1',
      email: 'user1@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@gmail.com',
      active: false

    },
    {
      id: 3,
      username: 'user3',
      email: 'user3@gmail.com',
      active: false
    }
  ]); 

  const nextId =useRef(4)

//   useCallback 을 쓰는 이유  (= 함수 재사용과 관련 !! )
//   : useCallback 을 사용하지 않으면 컴포넌트가 리렌더링 될때마다, 함수들이 새로만들어짐. 
//    그러나 useCallback 을 사용하게 되면 한번 만든 함수를 필요할때만 새로만들고 (재사용이 가능해진다!) - 최적화

  const handleCreateClick = useCallback(
      ()=>{
          const user = {
            id: nextId.current,
            username,
            email
          }

         
        // setUsers([...users, user])  
        setUsers(users => users.concat(user))

        setInputs({
            username: "",
            email: ""
        })  
      
        nextId.current +=1;
    } , [ username, email]
  )

  const handleDeleteClick = useCallback( id => {
              setUsers(users.filter(user => user.id!==id));
            }, [users]

 )
 
 const handleToggleClick = useCallback( (id) => { 
            setUsers(users.map( user => user.id===id?{...user, active: !user.active}:user)) 
             } , [users]
 )
 const count = useMemo(()=>countActiveUsers(users),[users]);

 return(
  <>
    <ArrayAdd
      username={username}
      email={email}
      onInputChange={handleInputChange}
      onCreateClick={handleCreateClick}
    />

    <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>
    <div> 활성사용자 수 : {count} </div>
  </> 
 )
}

export default App;