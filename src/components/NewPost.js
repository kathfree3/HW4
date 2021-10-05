import React, {useState} from 'react'


const NewPost = ({setNewData}) => {
    const [name , setName] = useState("")
    const [content, setContent] = useState("")

    const shouldBeDisabled = name === '' || content === ''

    return (
        <div> 
            <p> New Post </p>
            <form>
                <input type='text' onChange={e => setName(e.target.value)} placeholder= "Name..."/>
                <input type='text' onChange={e => setContent(e.target.value)} placeholder= "Write a New Post..."/>
                <input type="reset" onClick={() => setNewData({name, content})} disabled={shouldBeDisabled} value={"Submit"}/> 
            </form>
        </div>
    )
}

export default NewPost