import React from 'react'

// local imports
import Post from './Post'

const PostResults = ({newData, postData }) => {
    if (newData.length !== 0) {
        postData.push(newData)  
    }  
    return (
        <div>
            {postData.map((p, i) => (
                <Post name = {p.name} content ={p.content} key={i} />
            ))}
        </div>
    )
}

export default PostResults