import React, { Component } from 'react';
import Navbar from './components/Nav/NavBar';
import Summary from './components/Summary/Summary';
import SlidesContainer from './components/Slides/SlidesContainer';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loadedState from './initialState';
import rootReducer from './reducers';
import { HashRouter, Switch, Route } from 'react-router-dom';


window.sessionStorage.clear();
const cacheStore = window.sessionStorage.getItem("redux-store");
const initialState = cacheStore ?
    JSON.parse(cacheStore) :
    loadedState;
const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const saveState = () => {
    window.sessionStorage.setItem("redux-store", JSON.stringify(store.getState()));
};

store.subscribe(function () {
    console.log(store.getState())
});
store.subscribe(saveState);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <HashRouter>
                        <div>
                            <Navbar/>
                            <Switch>
                                <Route exact path="/" component={Summary}/>
                                <Route path="/slides" component={SlidesContainer}/>
                            </Switch>
                        </div>
                    </HashRouter>
                </Container>
            </Provider>
        );
    }
}

export default App;
