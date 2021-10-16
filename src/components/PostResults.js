import React from 'react'
import s from 'styled-components'

// local imports
import Post from './Post'

const Wrapper = s.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`
const PostResults = ({ postData }) => (
  <Wrapper>
    {postData.map(({ name, content, depth }, i) => (
      <Post name={name} content={content} depth={depth} />
    ))}
  </Wrapper>
)

export default PostResults
