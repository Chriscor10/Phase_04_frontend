import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';



function PostPage() {
    const [posts, setPosts] = useState([])
    const params = useParams();
    const id = params.id;
    const URL = `http://localhost:3000/posts/${id}`;


    useEffect(() => {
        fetch(URL)
        .then(r => r.json())
        .then(PostData => setPosts(PostData))
    }, [])


   

    return (
        <div className="postpage">
            <h1>{posts.heading}</h1>
            <p>{posts.content}</p>
          
        </div>
    )
}

export default PostPage;