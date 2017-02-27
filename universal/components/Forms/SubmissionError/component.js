import React from 'react'

const SubmissionError = ({ error }: string) => {
  return (
    <div>
      <strong>{error}</strong>
    </div>
  )
}

export default SubmissionError
