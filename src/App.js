// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import Title from './components/Title'
import NewPost from './components/NewPost'
import PostResults from './components/PostResults'
import './App.css'

const Container = s.div`
  margin: auto;
  padding: 10px;
  width: 70%;
  justify-content: center;
  h1 {
    text-align: center;
    display: block;
  }
`

const App = () => {
  const [postData, setPostData] = useState([{ name: 'kate', content: 'hey' }])

  return (
    <Container>
      <Title />
      <NewPost postData={postData} setPostData={setPostData} />
      <PostResults postData={postData} />
    </Container>
  )
}
export default App
