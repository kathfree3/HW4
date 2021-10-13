import React, { useState } from 'react'
import s from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

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
  font-size: 18px;
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding: 0;
    margin: 0 0 1.45rem;
  }
  .post-container {
    border: 0px solid;
    border-left: 2px solid #a6a6a6;
    margin: 1rem;
  }
`

const ReplyButton = s.button`
  display: flex;
  align-items: center;
  background-color: white;
  color: #a6a6a6;
  border: 0px;
  font-size: 18px;
`

const Post = ({ name, content, depth }) => {
  const [makeNewReview, setMakeNewReview] = useState(false)
  const [replies, addNewReply] = useState([])

  const renderReplies = () => (
    replies.map((elem, i) => (
      <Post name={elem.name} content={elem.content} depth={elem.depth} />
    ))
  )

  return (
    <Container className="post-container">
      <Voter />
      <p> depth is {depth} </p>
      <p className="post-username">
        {name}
      </p>
      <p>
        {content}
      </p>
      {renderReplies()}
      {depth !== 2 && (
      <ReplyButton type="button" className="reply-button" onClick={() => setMakeNewReview(!makeNewReview)}>
        <svg width="24" height="24" fill="none" stroke="#a6a6a6" strokeWidth="1">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
        Reply
      </ReplyButton>
      )}
      {makeNewReview && <Form previousName={name} depth={depth + 1} setInputData={addNewReply} inputData={replies} setMakeNewReview={setMakeNewReview} />}
    </Container>
  )
}

export default Post
