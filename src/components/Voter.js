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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2.5"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      {voteCount}
      <svg
        onClick={() => setVoteCount(voteCount - 1)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2.5"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </VoterWrapper>
  )
}

export default Voter
