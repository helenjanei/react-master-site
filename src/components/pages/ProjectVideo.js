import React from 'react';
import '../../App.css';

export default function ProjectVideo() {
  return (
  <>
     <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src='https://www.youtube.com/embed/pj0Ls82cqFY&t=80s'
        frameBorder="0"
      />
    </div>

</>
)
} 