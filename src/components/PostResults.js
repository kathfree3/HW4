import React from 'react'

// local imports
import Post from './Post'

const PostResults = ({ postData }) => (
  postData.map(({ name, content, replies }, i) => (
    <div>
      <Post name={name} content={content} />
    </div>
  ))
)

export default PostResults
