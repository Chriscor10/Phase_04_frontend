import React, { useState } from 'react';
import './postform.css'

function PostForm ({ addPost }) {
    const [formState, setFormState] = useState (
        {
        heading: "",
        content: "",
        picture_link:"",

    })
    
    function handleNewPost (event) {
        const userInput = event.target.value;
        const fieldName = event.target.name;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

        function handleSubmit(event) {
            event.preventDefault();
            addPost(formState)
            }
        

    return (
        <div className="post-form">
            <h1 className="post-form-heading">What are you thinking?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Heading:
                    <input 
                    name="heading" 
                    type="text" 
                    value={formState.heading} 
                    onChange={handleNewPost}
                    />
                </label>
                <label>
                    Write your Post here:
                    <input
                    name="content" 
                    type="text" 
                    value={formState.content} 
                    onChange={handleNewPost}
                    />
                </label>
                <label>
                    Add an image to you post:
                    <input 
                    name="picture_link" 
                    type="text" 
                    value={formState.picture_link} 
                    onChange={handleNewPost}
                    />
                </label>
                <button type="submit">Post me</button>
            </form>

        </div>
    )
}

export default PostForm;
