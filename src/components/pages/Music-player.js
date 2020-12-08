import React, {useState, useEffect} from 'react';
import Player from './Player';
import './music-player.css'

function Musicplayer() {
  const [songs] = useState([
    {
      title: "The Children Who Lived In a Barn",
      artist: "Written by Eleanor Graham, Narrated by Helen Ingham",
      img_src: "./images/img-24.jpg",
      src: "/audio/Chapter One.mp3"
    },
    {
      title: "On Marriage",
      artist: "Fred Duprez",
      img_src: "./images/cold-bg.jpg",
      src: "./audio/FredDuprezOnMarriage.mp3"
    },
    {
      title: "Sunny Skies",
      artist: "String Cheese Incident",
      img_src: "./images/img-22.jpg",
      src: "./audio/stringcheeseincident2019-11-30.akg481.t04.mp3"
    },
    {
      title: "Dudley's Kitchen",
      artist: "String Cheese Incident",
      img_src: "./images/img-23.jpg",
      src: "./audio/stringcheeseincident2019-11-30.akg481.t08.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
        className='player'
      />
    </div>
  );
}

export default Musicplayer;