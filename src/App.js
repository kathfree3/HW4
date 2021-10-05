// package imports
import React, {useState} from 'react'

// local imports
import Title from './components/Title'
import NewPost from './components/NewPost'
import PostResults from './components/PostResults'

 
const App = () => {
  const [postData, setPostData] = useState([])
  const [newData, setNewData] = useState([])

  return (
    <>
      <Title />
      <NewPost setNewData={setNewData}/>
      <PostResults newData={newData} postData={postData} />
  
  </>
  )
}
export default App