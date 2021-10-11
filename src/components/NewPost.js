import React, { useState } from 'react'
import s from 'styled-components'

const NewPostContainer = s.div`
  margin: auto;
  margin-bottom: 2rem;
  padding: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  border: 3px solid #f2f2f2;
  border-radius: 3px;
  h3 {
    margin: 1rem;
    font-size: 2em;
  }
`
export const SubmitButton = s.input`
  background: palevioletred;
  color: white;
  margin: 1rem;
  padding: 10px 24px;
  text-align: center;
  display: flex;
  font-size: 22px;
  margin-left: auto;
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

const NewPost = ({ postData, setPostData }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const submit = () => {
    setPostData([...postData, { name, content }])
    setName('')
    setContent('')
  }
  const shouldBeDisabled = name === '' || content === ''
  return (
    <NewPostContainer>
      <h3> New Post</h3>
      <form>
        <Input value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Name..." />
        <Input desc value={content} type="text" onChange={e => setContent(e.target.value)} placeholder="Write a New Post..." />
        <SubmitButton type="reset" onClick={() => submit()} disabled={shouldBeDisabled} value="Submit" />
      </form>
    </NewPostContainer>
  )
}

export default NewPost
