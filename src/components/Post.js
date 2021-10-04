import React, {useState} from 'react'
import Voter from './Voter'


const Post = ({name, content}) => {
    // state 
    
    return (
        <div>
            <hr/>
            <p> {name} </p>
            <p> {content}</p>
            <Voter />
        </div>
    )
}

export default Post