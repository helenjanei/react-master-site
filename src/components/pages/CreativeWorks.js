import React from 'react';
import Carousel from "react-elastic-carousel";
import './creativeWorks.css'

import Item from './Item'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 },
];

function CreativeWorks() { 
return (
    <div className='creative_works'>
      <h1 className='creative_works_text'>Browse a selection of my creative projects</h1>
      <div className="creative_works_carousel">
        <Carousel breakPoints={breakPoints}>
          <Item><img className='creative_image'src='images/creative/IMG_0078.jpg' /></Item>
          <Item><img className='creative_image'src='images/creative/IMG_3241.jpg' /></Item>
        <Item><img className='creative_image'src='images/creative/IMG_0240.JPG' /></Item>
        <Item><img className='creative_image'src='images/creative/IMG_0672.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_0865-2.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_2201.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_2440.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_2968.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_3242.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_1917.JPG' /></Item>
 <Item><img className='creative_image'src='images/creative/IMG_4889.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_7071.JPG' /></Item>
  <Item><img className='creative_image'src='images/creative/IMG_7160.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_8899.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_9014.jpeg' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_9521.JPG' /></Item>
<Item><img className='creative_image'src='images/creative/IMG_9816.JPG' /></Item>
      </Carousel>
      </div>
    </div>
  );
}

export default CreativeWorks;