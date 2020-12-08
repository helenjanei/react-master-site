import React, { useEffect, useState} from "react";
import "./recipe.css";
import Recipecard from './recipie-card'
import '../../App.css'


const Gutenberg = () => { 

const proxy_url = "https://cors-anywhere.herokuapp.com/"
const target_url = "https://https://gutendex.com/books?search="

const [books, setBooks] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('')

useEffect(() => {
  const getBooks = async () => {
    const response = await fetch(`${proxy_url}${target_url}${query}`); 
    const data = await response.json();
    setBooks(data.hits)
    console.log(data.hits)
  }
  getBooks()
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
  <>
<div className="cook">
<form onSubmit={getSearch}className="search-form"
>
<input type="text" placeholder="type the name of an ingredient or recipe here"className="search-bar" value={search}   onChange={(e) => updateSearch(e)} />
<button className="search-button">Search</button>
</form>
  </div>
 
</>
);
}

export default Gutenberg;