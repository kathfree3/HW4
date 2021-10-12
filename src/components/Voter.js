import React, { useState } from 'react'

const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <div className="voter">
      <svg
        onClick={() => setVoteCount(voteCount + 1)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sc-fzpans cKJzHK"
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sc-fzplWN hRBsWH"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  )
}

export default Voter
