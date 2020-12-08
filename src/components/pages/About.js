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
              alt='Travel'
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
              src='images/img-14.jpg'
              text='Explore my creative portfolio'
              label='Creativity'
              path='/creative'
            /> <CardItem
              src='images/img-25.jpg'
              text='My creative solutions to problems of all types'
              label='Problem Solving'
              path='/problemsolving'
            />
          </ul>
        </div>
      </div>
      </div>
  </>
  
  )
}
