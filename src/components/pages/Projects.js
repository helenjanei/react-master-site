import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'

export default function Projects() {
  return ( 
  <>
    <div className='projects'>
 
    <h1 >Projects</h1>
    
    
   </div>
      <div className="cards">
   <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Use my recipe finder to create your next great meal'
              label='Cook'
              path='/recipefinder'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Use my website to find your next great travel destination'
              label='Travel'
              path='/travelbuddy'
            />
           <CardItem
              src='images/img-8.jpg'
              text='Use my book finder to find your next great read'
              label='Read'
              path='/bookfinder'
            /></ul>
            <ul className='cards__items'>
               <CardItem
              src='images/img-21.jpg'
              text='Use my weather app to get the latest forecast'
              label='Weather'
              path='/weather'
            /> 
            <CardItem
              src='images/img-24.jpg'
              text='Unwind listening to an audio book with my audio player'
              label='Listen'
              path='/musicplayer'
            />
          </ul>
        </div>
      </div>
      </div>
  </>
  
  )
}
