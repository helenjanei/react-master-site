import React from 'react';
import './recipe.css'
import '../Cards.css'


const Recipecard = ({title, time, image, link, ingredients, calories}) => {
  return (
    
    <li className='cards__item'> 
    <a href={link} className='cards__item__link'>
      <h1 className= 'recipe_text'>{title}</h1>
        <img src={image} alt="" />
      <ul className="recipe_text">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
          ))}
      </ul>
      <p className="time" className='recipe_text'>Total Time: {time} mins</p>
     </a>
          </li>
   
  )
}

export default Recipecard