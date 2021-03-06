import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-5.mp4' autoPlay loop muted />
      <h1 className='hero-container-h1'>Welcome</h1>
      <p></p>
      <div className='hero-btns'>
        <a href='https://github.com/helenjanei/react-master-site'   target="_blank" >
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
         
        >
          SEE THE CODE
        </Button>
        </a>
        <Link to='/projectvideo' >
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          href='https://google.com' 
          onClick={console.log('hey')}
        > WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
