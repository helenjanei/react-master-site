import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'
import Pdf from '../../documents/helen_resume_1.0.pdf'
import '../Cards.css'

export default function About() {
  return ( 
  <>
    
    <h1 className='about'>About</h1>
      <div className="cards">
   <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
             <li className='cards__item'>
               <div className='cards__item__link' >
        <a href = {Pdf} target = "_blank">
          <figure className='cards__item__pic-wrap' data-category='CV'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src='images/img-7.jpg'
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>See my current curriculum vitae here</h5>
          </div>
        </a>
        </div>
      </li>
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
