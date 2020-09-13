import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CoolGuys.css'
export default function CoolGuysPage() {
    const [users, setUsers] = useState(localStorage.getItem('coolGuys') ? JSON.parse(localStorage.getItem('coolGuys')) : [])
    return (
        <>
          <h1>Cool guys you  following</h1>
          {users?.length ? <ul>
              {users.map((user) => (<li key={user.id} className="user-row">
                 <span><Link to={`/author/${user.login}/${user.email}`}>{user.name}</Link></span>
                 <img alt="" src={user.avatar_url} />
               </li>))} 
          </ul> : <>no cool guys yet...</>}
        </>
    )
}