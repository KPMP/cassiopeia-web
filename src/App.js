import React, { Component } from 'react';
import Navbar from './components/Nav/NavBar';
import Summary from './components/Summary/Summary';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loadedState from './initialState';
import rootReducer from './reducers';

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
                <div >
                    <Navbar/>
                    <Summary/>
                </div>
            </Provider>
        );
    }
}

export default App;
