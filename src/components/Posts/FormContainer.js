import React from 'react';
import PostForm from './PostForm';

const URL = "http://127.0.0.1:3000/posts"

function Formcontainer(){

    function addPosts (newPost) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        }

        fetch(URL, config)
        .then(r => r.json())
    }

    return (
        <div className="Form-container">
            <PostForm addPost={addPosts}/>
        </div>
    );
}

export default Formcontainer;