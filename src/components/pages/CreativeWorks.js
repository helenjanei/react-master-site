import React from 'react';
import Carousel from "react-elastic-carousel";
import './creativeWorks.css'
import '../../App.css'
import Item from './Item'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 6 },
  { width: 1200, itemsToShow: 7 },
];

function CreativeWorks() { 
return (
    <div className='creative_works'>
      <h1>My creativity in action</h1>
      <div className="creative_works_carousel">
        <Carousel breakPoints={breakPoints}>
          <Item><img className='creative_image'src='images/creative/IMG_0078.jpg' /></Item>
          <Item><img className='creative_image'src='images/creative/IMG_3241.jpg' /></Item>
        <Item><img className='creative_image'src='images/creative/IMG_0240.JPG' />
        </Item>
        <Item><img className='creative_image'src='images/creative/IMG_0441.JPG' /></Item>
         <Item><img className='creative_image'src='images/creative/IMG_0457.jpg' /></Item>
 <Item><img className='creative_image'src='images/creative/IMG_0672.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_0865-2.JPG' /></Item>

  <Item><img className='creative_image'src='images/creative/IMG_1197.JPEG' /></Item>

  <Item><img className='creative_image'src='images/creative/IMG_1236.JPEG' /></Item>


  <Item><img className='creative_image'src='images/creative/IMG_1289.JPG' /></Item>


  <Item><img className='creative_image'src='images/creative/IMG_1894.JPG' /></Item>


  <Item><img className='creative_image'src='images/creative/IMG_1917.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_2201.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_2440.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_2454.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_2591.jpeg' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_2872.JPG' /></Item>



        </Carousel>
      </div>
    </div>
  );
}

export default CreativeWorks;