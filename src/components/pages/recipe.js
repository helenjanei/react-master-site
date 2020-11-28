import React, { useEffect, useState} from "react";
import "./recipe.css";
import Recipecard from './recipie-card'


const Recipe = () => { 
const APP_ID = "73ad7ab7";
const APP_KEY = "d76fae845c28079043fa3b5c11bbc149";


const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('')

useEffect(() => {
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }
  getRecipes()
}, [query])

const updateSearch = e => { 
  setSearch(e.target.value);
  
};

const getSearch = e => {
  e.preventDefault();
setQuery(search)
setSearch('');
}

return (
<div className="recipe-background">
<form onSubmit={getSearch}className="search-form"
>
<input type="text" placeholder="type the name of an ingredient or recipe here"className="search-bar" value={search}   onChange={(e) => updateSearch(e)} />
<button className="search-button">Search</button>
</form>
<div className="recipes">
{recipes.map((recipe, index) => (
  <Recipecard title={recipe.recipe.label} time={recipe.recipe.totalTime}
  image={recipe.recipe.image}  link={recipe.recipe.url}
  ingredients={recipe.recipe.ingredients}
  calories={recipe.recipe.totalNutrients}
  key={index}
  />
))}
</div>
</div>
);
}

export default Recipe;