// package imports
import React, { useState } from 'react'

// local imports
import Title from './components/Title'
import NewPost from './components/NewPost'
import PostResults from './components/PostResults'
import './App.css'

const App = () => {
  const [postData, setPostData] = useState([])
  const [newData, setNewData] = useState([])

  return (
    <div className="container">
      <div className="row" style={{ 'text-align': 'center' }}>
        <Title />
      </div>
      <div className="row" style={{ 'text-align': 'center' }}>
        <NewPost setNewData={setNewData} />
      </div>
      <div className="row" style={{ 'text-align': 'center' }}>
        <PostResults newData={newData} postData={postData} />
      </div>
    </div>
  )
}
export default App
