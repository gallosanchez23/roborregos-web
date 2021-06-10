// @flow
import React from 'react'
import './CandidatesVideo.css'

function CandidatesVideo() {
  return (
    <>
      <iframe
        className="candidates-video"
        src="https://www.youtube.com/embed/Iec50DS8R9Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </>
  )
}

export default CandidatesVideo
