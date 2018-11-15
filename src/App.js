import React, { Component } from 'react';
import Navbar from './components/Nav/NavBar';

class App extends Component {
  render() {
    return (
      <div >
      	<Navbar/>
       	<h1>Welcome to the Patient Whole Slide Image Viewer!</h1>
      </div>
    );
  }
}

export default App;
