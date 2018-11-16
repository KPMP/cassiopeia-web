import React, { Component } from 'react';
import Navbar from './components/Nav/NavBar';
import Summary from './components/Summary/Summary'

class App extends Component {
  render() {
    return (
      <div >
      	<Navbar/>
       	<Summary/>
      </div>
    );
  }
}

export default App;
