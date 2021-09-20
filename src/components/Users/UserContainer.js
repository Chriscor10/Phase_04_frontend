import React, { useState, useEffect } from 'react';
import User from './User';

const URL = 'http://127.0.0.1:3000/users'

function UsersContainer() {
    const [users, setUsers] = useState([])

    useEffect (() => {

    fetch(URL) 
    .then(r => r.json())
    .then(UserData => setUsers(UserData))
}, [])


    return(
        <div>
            {users.length === 0
          ? <h1>Loading...</h1>
            :users.map(users => {
                return <User
                key={users.id}
                users={users}
                 />
            })}
        </div>
    )
}

export default UsersContainer;