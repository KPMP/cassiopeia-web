import React, { Component } from 'react';
import NavBar from './components/Nav/NavBar';
import Summary from './components/Summary/Summary';
import Slides from './components/Slides/Slides';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loadedState from './initialState';
import rootReducer from './reducers';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SlidePrintManager from './components/Slides/Menu/SlidePrintManager';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

const cacheStore = window.sessionStorage.getItem("redux-store");
const initialState = cacheStore ?
    JSON.parse(cacheStore) :
    loadedState;
const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const saveState = () => {
    window.sessionStorage.setItem("redux-store", JSON.stringify(store.getState()));
};
const GA_TRACKING_ID = 'UA-124331187-3';

ReactGA.initialize(GA_TRACKING_ID);
function logPageView(location, action) {
    ReactGA.set({ page: location.pathname + location.search });
    ReactGA.pageview(location.pathname + location.search);
}
const history = createHistory();
history.listen((location, action) => {
    logPageView(location, action);
});

store.subscribe(function () {
    console.log(store.getState())
});

store.subscribe(saveState);

SlidePrintManager.getInstance().setReduxStore(store);

class App extends Component {

    componentWillMount() {
        logPageView(window.location, "");
    }

    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <HashRouter>
                        <div>
                            <NavBar/>
                            <Switch>
                                <Route exact path="/" component={Summary}/>
                                <Route path="/slides" component={Slides}/>
                            </Switch>
                        </div>
                    </HashRouter>
                </Container>
            </Provider>
        );
    }
}

export default App;
