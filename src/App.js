import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Donuts from './components/pages/Donuts';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import Mypets from './components/pages/Mypets';
import Been from './components/pages/Been';
import From from './components/pages/From';
import Food from './components/pages/Food';
import Job from './components/pages/Job';
import Feedback from './components/pages/Feedback';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/donuts' component={Donuts} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/mypets' component={Mypets} />
          <Route path='/been' component={Been} />
          <Route path='/from' component={From} />
          <Route path='/food' component={Food} />
          <Route path='/job' component={Job} />
        </Switch>
        <Footer />
      </Router> 
    </>  
  );
}

export default App;
