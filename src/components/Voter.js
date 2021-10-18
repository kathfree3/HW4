// package imports
import React, { useState } from 'react'
import s from 'styled-components'

const VoterWrapper = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  float: right;
`
const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <VoterWrapper>
      <svg
        onClick={() => setVoteCount(voteCount + 1)}
        className="svg-icon"
        viewBox="0 0 24 24"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      {voteCount}
      <svg
        className="svg-icon"
        viewBox="0 0 24 24"
        onClick={() => setVoteCount(voteCount - 1)}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </VoterWrapper>
  )
}

export default Voter
