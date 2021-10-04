import React, {useState} from 'react'


const NewPost = ({setNewData}) => {
    const [name , setName] = useState("")
    const [content, setContent] = useState("")

    return (
        <div> 
            <p> New Post </p>
            <input onChange={e => setName(e.target.value)} placeholder="Name..."/>
            <input onChange={e => setContent(e.target.value)} placeholder="Write a New Post..."/>
            <button type="button" onClick={() => setNewData({name, content})}> Submit </button>
        </div>
    )
}

export default NewPost