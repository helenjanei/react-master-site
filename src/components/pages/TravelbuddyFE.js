import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../HeroSection.css';
import { Link } from 'react-router-dom';
import './travel.css';

export default function TravelbuddyFE() {
  return ( 
  <>
    
       <div className='travel_hero_container'>
         
      
      <h1 className='travelbuddy_h1_logo'>Travel Buddy Front End</h1>
      <p></p>
      <div className='hero-btns'>
        <a href='https://github.com/helenjanei/travelbuddy-frontend' >
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          href='https://github.com/helenjanei/travelbuddy-frontend'
           target="_blank"
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
      
  </>)}