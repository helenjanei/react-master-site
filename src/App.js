import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cook from './components/pages/Cook';
import Projects from './components/pages/Projects';
import ProjectVideo from './components/pages/ProjectVideo';
import Recipe from './components/pages/recipe';
import Book from './components/pages/Book';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Travel from './components/pages/Travel';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cook' component={Cook} />
          <Route path='/projects' component={Projects} />
          <Route path='/projectvideo' component={ProjectVideo} /> 
          <Route path='/recipefinder' component={Recipe} />
           <Route path='/bookfinder' component={Book} /> 
           <Route path='/about' component={About} />
           <Route path='/contact' component={Contact} />  
           <Route path='/travelbuddy' component={Travel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
