import React from 'react'


function User({propUser, onDeleteClick, onToggleClick}){
    const {username, email, id, active} = propUser
    return(
        <div>
            <b style={{cursor:'pointer', color: active?'red':'black'}} onClick={ ()=>{onToggleClick(id)}} > {username} 
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={()=>{onDeleteClick(id)}}>삭제</button>
        </div>
    );
}


function UserList({users, onRemove}){
    return(
        <div>
            {users.map(user=>(<User user={user} key={user.id} onRemove={onRemove}/>))}
        </div>
    );
    
}

export default UserList;