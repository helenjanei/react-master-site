import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cook from './components/pages/Cook';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';
import Recipe from './components/pages/recipe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cook' component={Cook} />
          <Route path='/products' component={Projects} />
          <Route path='/sign-up' component={SignUp} /> 
          <Route path='/recipefinder' component={Recipe} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
