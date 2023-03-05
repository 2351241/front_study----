import React, {useEffect} from 'react';

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

function MemberList({ propUsers, deleteClick, toggleClick}) {
    return(
        <div>
           {propUsers.map(u => (<User propUser={u} key={u.id} onDeleteClick={deleteClick} onToggleClick = {toggleClick} />))}
        </div>
    )
}

export default MemberList;