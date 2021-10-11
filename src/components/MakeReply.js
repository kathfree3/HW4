import React, { useState } from 'react'
import s from 'styled-components'

import { SubmitButton } from './NewPost'

const MakeReply = ({
  previousName, addNewReply, replies, setMakeNewReview,
}) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState(`@${previousName}`)

  const submit = () => {
    addNewReply([...replies, { name, content }])
    setMakeNewReview(false)
    setName('')
    setContent('')
  }
  const shouldBeDisabled = name === '' || content === ''

  return (
    <MakeReplyContainer>
      <form>
        <Input value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Name..." />
        <Input desc value={content} type="text" onChange={e => setContent(e.target.value)} placeholder="Write a New Post..." />
        <SubmitButton type="reset" onClick={() => submit()} disabled={shouldBeDisabled} value="Submit" />
      </form>
    </MakeReplyContainer>
  )
}

export default MakeReply

const MakeReplyContainer = s.div`
  margin: auto;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 3px solid #f2f2f2;
  border-radius: 3px;
`

const Input = s.input`
  display: flex;
  font-size: 22px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  color: #262626;
  padding: 16px;
  width: 95%;
  margin: 2rem 1rem;
  height: ${props => (props.desc ? '100px' : '56px')};
`
