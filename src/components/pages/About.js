import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'

export default function About() {
  return ( 
  <>
    
    <h1 className='about'>About</h1>
      <div className="cards">
   <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='Use our recipe finder to create your next great meal'
              label='Professional background'
              path=''
            />
           <CardItem
              src='images/img-9.jpg'
              text='Use our book finder to find your next great read'
              label='Creativity'
              path='/bookfinder'
            /> <CardItem
              src='images/img-9.jpg'
              text='Use our book finder to find your next great read'
              label='History'
              path='/bookfinder'
            />
          </ul>
        </div>
      </div>
      </div>
  </>
  
  )
}
