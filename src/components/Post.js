// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import Voter from './Voter'
import Form from './Form'

const Container = s.div`
  margin: 1rem;
  padding: 0rem 1rem;
  display: block;
  width: 100%;
  border: 5px solid #f2f2f2;
  border-radius: 3px;
  .post-container {
    border: 0px solid;
    border-radius: 0px;
    border-left: 2px solid #a6a6a6;
  }
`

const ReplyButton = s.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #a6a6a6;
`

// make a new post for each reply
const renderReplies = replyData => (
  replyData.map(({
    name, content, depth, postID,
  }) => <Post name={name} content={content} depth={depth} key={postID} />)
)

const Post = ({
  name, content, depth, postID,
}) => {
  const [makeNewReview, setMakeNewReview] = useState(false)
  const [replies, addNewReply] = useState([])

  // into the make new reply form, increase the depth of any new post you make
  return (
    <Container className="post-container">
      <Voter />
      <p className="post-username">
        {name}
      </p>
      <p>
        {content}
      </p>
      {renderReplies(replies)}
      {depth !== 2 && (
      <ReplyButton onClick={() => setMakeNewReview(!makeNewReview)}>
        <svg className="svg-icon reply">
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
