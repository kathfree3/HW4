import React, { useState } from 'react'
import s from 'styled-components'

const Container = s.div`
  margin: auto;
  padding: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #f2f2f2;
  border-radius: 3px;
  h5 {
    text-align: left;
    display: block;
  }
`
const Form = s.form`
  text-align: left; 
  display: block;
`
const SubmitButton = s.input`
  background: palevioletred;
  color: white;
  margin: 1rem;
  padding: 10px 24px;
  text-align: center;
`

const Input = s.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 8px;
  width: 80%;
  margin: 1rem;
`

const NewPost = ({ setNewData }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const shouldBeDisabled = name === '' || content === ''

  return (
    <Container>
      <h5> New Post</h5>
      <Form>
        <Input type="text" onChange={e => setName(e.target.value)} placeholder="Name..." />
        <Input type="text" onChange={e => setContent(e.target.value)} placeholder="Write a New Post..." />
        <SubmitButton type="reset" onClick={() => setNewData({ name, content })} disabled={shouldBeDisabled} value="Submit" />
      </Form>
    </Container>
  )
}

export default NewPost
