import React from 'react';
import { useEffect } from "react";
import Navbar from './components/Navbar';
import '@aws-amplify/ui-react/styles.css'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Donuts from './components/pages/Donuts';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import Mypets from './components/pages/Mypets';
import Been from './components/pages/Been';
import From from './components/pages/From';
import Food from './components/pages/Food';
import Job from './components/pages/Job';
import Whoami from './components/pages/Whoami';
import Contact from './components/pages/Contact';
import Support from './components/pages/Support';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/donuts' component={Donuts} />
          <Route path='/mypets' component={Mypets} />
          <Route path='/been' component={Been} />
          <Route path='/from' component={From} />
          <Route path='/food' component={Food} />
          <Route path='/job' component={Job} />
          <Route path='/whoami' component={Whoami} />
          <Route path='/contact' component={Contact} />
          <Route path='/support' component={Support} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
        <Footer />
      </Router> 
    </>  
  );
}

export default (App);
