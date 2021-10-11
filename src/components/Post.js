import React, { useState } from 'react'

// local imports
import Voter from './Voter'

const Post = ({ name, content }) => (
  <div className="container">
    <hr />
    <p>
      {name}
    </p>
    <p>
      {content}
    </p>
    <Voter />
  </div>
)

export default Post
