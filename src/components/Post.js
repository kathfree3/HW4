import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import { render } from 'react-dom'
import Voter from './Voter'
import MakeReply from './MakeReply'

const Container = s.div`
  margin: auto;
  margin-bottom: 2rem;
  padding: 15px;
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
const RowBreak = s.div`
  flex-basis: 100%;
  height: 0;
`

const VoterStyle = s.span`
  margin-left: auto;
`
const Replies = s.div`
  width: 100%; 
  div {
    border-left: 2px solid;
  }
`
const Post = ({ name, content }) => {
  const [makeNewReview, setMakeNewReview] = useState(false)
  const [replies, addNewReply] = useState([])

  const hasReplies = replies.length !== 0

  const renderReplies = () => (
    <Replies>
      {replies.map((elem, i) => (
        <Post name={elem.name} content={elem.content} />
      ))}
    </Replies>
  )

  return (
    <Container>
      <span>
        <p className="post-username">
          {name}
        </p>
        <p>
          {content}
        </p>
      </span>
      <VoterStyle>
        <Voter />
      </VoterStyle>
      <RowBreak />
      <button type="button" onClick={() => setMakeNewReview(!makeNewReview && replies.length < 3)}>
        Reply
      </button>
      <RowBreak hidden={!makeNewReview} />
      <div className="testing" hidden={!makeNewReview}>
        <MakeReply previousName={name} addNewReply={addNewReply} replies={replies} setMakeNewReview={setMakeNewReview} />
      </div>
      <RowBreak />
      {hasReplies && renderReplies()}
    </Container>
  )
}

export default Post
