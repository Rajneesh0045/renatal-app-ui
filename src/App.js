import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';

class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <LandingPage/>
          <ExplorePage/>
          <AboutPage/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
