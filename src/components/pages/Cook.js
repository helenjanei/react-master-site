import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem'

export default function Cook() {
  return (
  <div className="cards">

  <h1 className='services'>Cook</h1>
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
  
  )
}
