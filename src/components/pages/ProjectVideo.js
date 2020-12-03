import React from 'react';
import '../../App.css';
import ReactPlayer from 'react-player'

export default function ProjectVideo() {
  return (
  <>
     <div
      className="video"
     
    >
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=pj0Ls82cqFY'
   className='react_player'
    width='100%'
          height='100%'
      />
    </div>

</>
)
} 