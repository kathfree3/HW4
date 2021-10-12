import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import Voter from './Voter'
import Form from './Form'

const Container = s.div`
  margin: auto;
  margin-bottom: 2rem;
  padding: 10px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  border: 3px solid #f2f2f2;
  border-radius: 3px;
  box-shadow: 5px;
  align-items: center;
  p, span {
    font-size: 18px;
  }
`
const RowBreak = s.div.attrs(() => ({
  className: 'row-break',
}))`
  flex-basis: 100%;
  height: 0;
`

const VoterWrapper = s.span`
  margin-left: auto;
  div {
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`
const Replies = s.div`
  width: 100%; 
  height: 70%;
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
      <span>
        <p className="post-username">
          {name}
        </p>
        <p>
          {content}
        </p>
      </span>
      <VoterWrapper className="voter-wrapper">
        <Voter className="voter" />
      </VoterWrapper>
      <RowBreak />
      {makeNewReview && <Form previousName={name} setInputData={addNewReply} inputData={replies} setMakeNewReview={setMakeNewReview} />}
      {hasReplies && renderReplies()}
      <button type="button" onClick={() => setMakeNewReview(!makeNewReview && replies.length < 3)}>
        Reply
      </button>
    </Container>
  )
}

export default Post
