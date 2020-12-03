import React from 'react';
import '../../App.css';
import ReactPlayer from 'react-player'

export default function ProjectVideo() {
  return (
  <>
     <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: '12vh',
       paddingLeft: '20%',
       
      }}
    >
      <ReactPlayer 
        url='https://www.youtube.com/embed/pj0Ls82cqFY&t=80s'
   
      />
    </div>

</>
)
} 