import React, { useState } from 'react'

const NewPost = ({ setNewData }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const shouldBeDisabled = name === '' || content === ''

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> New Post... </h5>
        <form>
          <div className="mb-3">
            <input type="text" onChange={e => setName(e.target.value)} placeholder="Name..." />
          </div>
          <div className="mb-3">
            <input type="text" onChange={e => setContent(e.target.value)} placeholder="Write a New Post..." />
          </div>
          <input type="reset" onClick={() => setNewData({ name, content })} disabled={shouldBeDisabled} value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default NewPost
