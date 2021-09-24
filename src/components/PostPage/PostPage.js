import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import UpdatePost from './UpdatePost';



function PostPage() {
    const [posts, setPosts] = useState([])
    const params = useParams();
    const id = params.id;
    const URL = `http://localhost:3000/`;


    useEffect(() => {
        fetch(URL + `posts/${id}` )
        .then(r => r.json())
        .then(PostData => setPosts(PostData))
    }, [])

    function updatePosts(post) {
        fetch(URL + `posts/${id}`, {
            method: "PATCH",
            body: JSON.stringify(post),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        });
  

    return (
        <div className="postpage">
            <h1>{posts.heading}</h1>
            <p>{posts.content}</p>
            <UpdatePost updatePosts={updatePosts}/>
        </div>
    )
}}

export default PostPage;