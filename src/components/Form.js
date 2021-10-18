// package imports
import React, { useState } from 'react'
import s from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Input = s.input`
  display: block;
  font-size: 1.3rem;
  padding: 10px 24px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  margin: 2rem 1rem;
`

const TextBox = s(Input)`
  color: #262626;
  width: 95%;
`

const SubmitButton = s(Input)`
  background: #DB7093;
  color: white;
  margin-left: auto;
  :disabled {
    background: #F4D1DC;
  }
`

// container should have some diff based on if its a reply or new post
const FormContainer = s.div`
  margin: auto;
  border-radius: 3px;
  padding: 5px;
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: ${props => (props.isNewPost ? '80%' : '100%')};
  border: ${props => (props.isNewPost ? '5px' : '3px')} solid #f2f2f2;
`

const Form = ({
  setInputData, inputData, setMakeNewReview, h, previousName, depth,
}) => {
  const [name, setName] = useState('')
  // if a prev name is provided use it, else its a new post/ thread
  const [content, setContent] = useState(previousName ? `@${previousName}` : '')

  const postID = uuidv4()
  const shouldBeDisabled = name === '' || content === ''

  const submit = () => {
    // add the new post data into the input data
    setInputData([...inputData, {
      name, content, depth, postID,
    }])
    // reset name and content in the form
    setName('')
    setContent('')
    // retoggle button if necessary
    if (setMakeNewReview) {
      setMakeNewReview(false)
    }
  }

  return (
    <FormContainer isNewPost={!previousName}>
      <h2>{h}</h2>
      <form>
        <TextBox value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Name..." />
        <TextBox value={content} type="text" onChange={e => setContent(e.target.value)} placeholder="Write a New Post..." />
        <SubmitButton type="reset" onClick={() => submit()} disabled={shouldBeDisabled} value="Submit" />
      </form>
    </FormContainer>
  )
}

export default Form
