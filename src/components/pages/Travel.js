import React from 'react';
import './travel.css'
import CardItem from '../CardItem'

export default function Travel() {
  return ( 
    <>
  <div className="travel_container">
       <img className='travel_picture' src='images/img-12.jpg' />
    <h1  className='travel_buddy_logo'>Travel Buddy</h1>
  </div>
  
  <div className="travel_buddy_text">

    <p className="travel_buddy_text" >Welcome to Travel Buddy, a React app where users can explore the hidden gems of travel, submitted by fellow travellers.</p>


<p  className="travel_buddy_text">
This project was part of a two-week, four-person final project at the <a href='https://northcoders.com/'target="_blank">Northcoders</a> bootcamp. 
</p>
<p  className="travel_buddy_text"  >
  
Travel Buddy uses the following technologies:
</p>

<ul className='techstack_ul'>
<li className='techstack_list'>React</li>
<li className='techstack_list'>Leaflet</li>
<li className='techstack_list' >React Leaflet </li>
<li className='techstack_list' >Firebase </li>
<li className='techstack_list'>Styled Components</li>
<li className='techstack_list'> Axios</li>
</ul>
    <p className="travel_buddy_text" >
You can find the hosted GraphQL API used by the React app <a href='https://travel-buddy-2020.herokuapp.com/graphql'target="_blank">here</a>
</p>
    </div>


    
      <div className="cards">
   <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-18.jpg'
              text='View the back end code'
              label='Back end'
              path='/travelbuddybackend'
             
            />
            <CardItem
              src='images/img-4.jpg'
              text='View the front end code'
              label='Front end'
              path='/travelbuddyfrontend'
             
            />
           <CardItem
              src='images/img-20.jpg'
              text='View the Northcoders graduate showcase for Travel Buddy'
              label='Video'
              path='/projectvideo'
            />
          </ul>
        </div>
      </div>
      </div>
  </>
  
  )
}