import React, { Component } from 'react';
import Navbar from './components/Nav/NavBar';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Summary from './components/Summary/Summary';
import Slides from './components/Slides/Slides';

class App extends Component {
  render() {
    return (
      <div >
      	<Navbar/>
      	<HashRouter>
      		<Switch>
       			<Route exact path="/" component={Summary}/>
       			<Route path="/slides" component={Slides}/>
       		</Switch>
       	</HashRouter>
      </div>
    );
  }
}

export default App;
