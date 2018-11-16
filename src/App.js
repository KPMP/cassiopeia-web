import React, { Component } from 'react';
import Navbar from './components/Nav/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Summary from './components/Summary/Summary';
import Slides from './components/Slides/Slides';

class App extends Component {
  render() {
    return (
      <div >
      	<Navbar/>
      	<BrowserRouter>
      		<Switch>
       			<Route exact path="/" component={Summary}/>
       			<Route exact path="/slides" component={Slides}/>
       		</Switch>
       	</BrowserRouter>
      </div>
    );
  }
}

export default App;
