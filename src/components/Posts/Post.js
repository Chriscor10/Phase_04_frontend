import React from 'react';
import './post.css'
import { Link } from 'react-router-dom';

function Post({ post, deletePost }) {
    const {id, heading, content, picture_link} = post
   
    function handleDeletePost() {
        deletePost(id);
    }
    return (
        <div className="Post">
            <img alt="post" src={picture_link}/>
            <h1>{post.user.name}</h1>
            <Link to={`/posts/${id}`}>{heading}</Link>
            <p>{content}</p>
          <div><button className="delete-post" onClick={handleDeletePost}>Delete Post</button></div>
            
        </div>
    )
}

export default Post;