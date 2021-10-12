import React, { useState } from 'react'
import s from 'styled-components'

const SubmitButton = s.input`
  background: palevioletred;
  color: white;
  margin: 0rem 3rem;
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

const newPostSpacing = { width: '80%', margin: '2rem' }
const newReplySpacing = { width: '100%', margin: '0rem' }

const FormContainer = s.div`
  margin: auto;
  flex-direction: column;
  border: 3px solid #f2f2f2;
  border-radius: 3px;
  padding: 8px;
  display: flex;
  margin-bottom: ${props => (props.isNewPost ? newPostSpacing.margin : newReplySpacing.margin)};
  width: ${props => (props.isNewPost ? newPostSpacing.width : newReplySpacing.width)};
  h3 {
    margin: 1rem;
    font-size: 2em;
  }
`

const Form = ({
  setInputData, inputData, setMakeNewReview, h, previousName,
}) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState(previousName ? `@${previousName}` : '')

  const shouldBeDisabled = name === '' || content === ''

  const submit = () => {
    setInputData([...inputData, { name, content }])
    setName('')
    setContent('')
    if (setMakeNewReview) {
      setMakeNewReview(false)
    }
  }

  return (
    <FormContainer isNewPost={!previousName}>
      {h && <h3>{h}</h3>}
      <form>
        <Input value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Name..." />
        <Input value={content} type="text" onChange={e => setContent(e.target.value)} placeholder="Write a New Post..." />
        <SubmitButton type="reset" onClick={() => submit()} disabled={shouldBeDisabled} value="Submit" />
      </form>
    </FormContainer>
  )
}

export default Form
