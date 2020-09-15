import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CoolGuys.css'
export default function CoolGuysPage() {
    const [users, setUsers] = useState(localStorage.getItem('coolGuys') ? JSON.parse(localStorage.getItem('coolGuys')) : [])
    return (
        <>
          <h1>Cool guys you  following</h1>
          {users?.length ? <ul className="coolGuysList">
              {users.map(({name, email, login, avatar_url, repo, id}) => (<li key={id} className="user-row">
                 <span><Link to={`/author/${login}/${email}`}>{name}</Link></span>
                 <img alt="" src={avatar_url} />
                 <span>{repo}</span>
               </li>))} 
          </ul> : <>no cool guys yet...</>}
        </>
    )
}