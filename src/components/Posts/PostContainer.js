import React, { useState, useEffect } from 'react';
import './postcontainer.css';
import Post from './Post';

const URL = "http://127.0.0.1:3000/posts"

function PostContainer() {
    const [posts, setPosts] = useState([])
     
    useEffect (() => {
    
    fetch(URL)
    .then(r => r.json())
    .then(PostData => setPosts(PostData))
    }, [])

    function deletePost(postId) {
            const config = { method: "DELETE"}
       const deleteURL = `${URL}/${postId}`;
            fetch(deleteURL, config)
            .then(r => r.json())
            .then(() => {
                const newPosts = posts.filter(post => post.id !== postId);
                setPosts(newPosts);
            })
        
    }

    return (
        <div className="post-container">
            { posts.length === 0
          ? <h1>Loading...</h1>
            :posts.map(posts => {
                return <Post 
                key={posts.id}
                post={posts}
                deletePost={deletePost}
                />
            })}

           
        </div>
    );
}

export default PostContainer;
