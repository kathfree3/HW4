import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import Voter from './Voter'
import Form from './Form'

const Container = s.div`
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  display: block;
  width: 100%;
  border: 3px solid #f2f2f2;
  border-radius: 3px;
  box-shadow: 5px;
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 18px;
    padding: 0;
    margin: 0 0 1.45rem;
  }
`
const Replies = s.div`
  width: 100%; 
  .post-container {
    border: 0px solid;
    border-left: 2px solid;
    margin: 1rem;
  }
`
const Post = ({ name, content }) => {
  const [makeNewReview, setMakeNewReview] = useState(false)
  const [replies, addNewReply] = useState([])

  const hasReplies = replies.length !== 0

  const renderReplies = () => (
    <Replies className="replies-container">
      {replies.map((elem, i) => (
        <Post name={elem.name} content={elem.content} />
      ))}
    </Replies>
  )

  return (
    <Container className="post-container">
      <Voter />
      <p className="post-username">
        {name}
      </p>
      <p>
        {content}
      </p>
      {makeNewReview && <Form previousName={name} setInputData={addNewReply} inputData={replies} setMakeNewReview={setMakeNewReview} />}
      {hasReplies && renderReplies()}
      <button type="button" onClick={() => setMakeNewReview(!makeNewReview && replies.length < 3)}>
        Reply
      </button>
    </Container>
  )
}

export default Post
