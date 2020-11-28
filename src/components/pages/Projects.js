import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'

export default function Projects() {
  return ( 
  <>
    
    <h1 className='projects'>Projects</h1>
      <div className="cards">
   <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Use our recipe finder to create your next great meal'
              label='Cook'
              path='/recipefinder'
            />
          </ul>
        </div>
      </div>
      </div>
  </>
  
  )
}
