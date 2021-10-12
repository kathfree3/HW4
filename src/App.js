// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import Form from './components/Form'
import PostResults from './components/PostResults'
import './App.css'

const Container = s.div`
  margin: auto;
  padding: 10px;
  width: 70%;
  display: block;
  h1 {
    text-align: center;
  }
`

const App = () => {
  const [postData, setPostData] = useState([{ name: 'kate', content: 'hey' }])

  return (
    <Container>
      <h1> CIS 197 Community </h1>
      <Form inputData={postData} setInputData={setPostData} h="New Post" previousName="" />
      <PostResults postData={postData} />
    </Container>
  )
}
export default App
