import React, { Component } from 'react';
import Navbar from './components/Nav/NavBar';
import LandingPage from './components/LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <div >
      	<Navbar/>
       	<LandingPage/>
      </div>
    );
  }
}

export default App;
