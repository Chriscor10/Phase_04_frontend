import React from 'react';

function User( {users} ) {
    const {id, name, background_image, picture_link, user} = users
    
    return (
        <div>
            <img className="user-img" alt="user img" src={picture_link} />
            <h1>{name}</h1>
            <h2>{user}</h2>
            <img className="background" alt="background" src={background_image} />

        </div>
    )
}

export default User;