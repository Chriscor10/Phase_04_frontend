import React, { useState} from 'react';


export default function UpdatePost({updatePosts}) {
    const [ newPosts, setNewPosts] = useState ({...newPosts})

    function handleChange(e){
        const updatedValue = {...newPosts} ;
       updatedValue[e.target.name] = e.target.updatedValue;
       setNewPosts({...updatedValue});
    }

       function handleUpdate(e) {
        e.preventDefault()
        updatePosts(newPosts)
    }
   
    return (
        <div>
               <form onSubmit={handleUpdate}>
            <p>Name</p>
            <input name="name" value={newPosts.name} onChange={handleChange} />
            <p>Phone</p>
            <input name="phone" value={newPosts.phone} onChange={handleChange} />
            <p>Address</p>
            <input name="address" value={newPosts.address} onChange={handleChange} />
            <p>Rating</p>
            <input name="rating" value={newPosts.rating} onChange={handleChange} />
            <br></br>
            <button className="update-button" type="submit">Update</button>
        </form>
        </div>
    )
}
