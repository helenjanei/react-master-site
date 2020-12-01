import React from 'react';

import './travel.css'
import CardItem from '../CardItem'

export default function Travel() {
  return ( 
    <>
  <div className="travel_container">
    <div className="logo_container">
    <h1  className='travel_buddy_logo'>Travel Buddy</h1>
    </div>
    </div>
    <div className="travel_buddy_text">

    <p>Welcome to Travel Buddy, a React app where users can explore the hidden gems of travel, submitted by fellow travellers.</p>
   <p></p>
    <p>
You can find the hosted GraphQL API used by the React app here: https://travel-buddy-2020.herokuapp.com/graphql
</p>
<p></p>
<p>
This was part of a two-week, four-person group final project at the Northcoders bootcamp. It uses the following technologies:
</p>
<p></p>
<ul>
<li>React</li>
<li>Leaflet</li>
<li>React Leaflet </li>
<li>Firebase </li>
<li>Styled Components</li>
<li> Axios</li>
</ul>
    </div>


    
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
            <CardItem
              src='images/img-9.jpg'
              text='Use our website to find your next great travel destination'
              label='Travel'
              path='/travelbuddy'
            />
           <CardItem
              src='images/img-8.jpg'
              text='Use our book finder to find your next great read'
              label='Read'
              path='/bookfinder'
            />
          </ul>
        </div>
      </div>
      </div>
  </>
  
  )
}