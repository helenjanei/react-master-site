import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
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
import TravelbuddyFE from './components/pages/TravelbuddyFE';
import TravelbuddyBE from './components/pages/TravelbuddyBE';
import Weather from './components/pages/Weather'
import Musicplayer from './components/pages/Music-player'
import Gutenberg from './components/pages/ProjectGut'
import CreativeWorks from './components/pages/CreativeWorks'

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
           <Route path='/travelbuddyfrontend' component={TravelbuddyFE} /> 
           <Route path='/travelbuddybackend' component={TravelbuddyBE} />       
         <Route path='/weather' component={Weather} />         
         <Route path='/musicplayer' component={Musicplayer} />
             <Route path='/gutenberg' component={Gutenberg} />    
 <Route path='/creative' component={CreativeWorks} />    


        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
