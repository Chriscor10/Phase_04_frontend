import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
 
function Postpage() {
    const[posts, setPosts] = useState([])
    const params = useParams();
    const id = params.id;
    const URL = `http://127.0.0.1:3000/posts/1`;

    useEffect (() => {

        fetch(URL)
        .then(r => r.json())
        .then(PostsData => setPosts(PostsData))
    }, [])


    return (
        <div className="Post-page">
            <h2>{posts.heading}</h2>
            <p>{posts.content}</p>
            <p>{posts.comments.comment_text}</p>
        </div>
    )
}

export default Postpage;