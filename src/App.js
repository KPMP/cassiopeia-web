import React, { Component } from 'react';
import NavBarContainer from './components/Nav/NavBarContainer';
import AboutContainer from './components/About/AboutContainer';
import NotFound from './components/Error/NotFound'
import Slides from './components/Slides/Slides';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loadedState from './initialState';
import rootReducer from './reducers';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import SlidePrintManager from './components/Slides/Menu/SlidePrintManager';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import ErrorBoundaryContainer from "./components/Error/ErrorBoundaryContainer";
import ErrorPage from "./components/Error/ErrorPage";


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
	
    componentDidMount() {
    	logPageView(window.location, "");
    }

    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <Router history={history}>
                        <ErrorBoundaryContainer>
                        <div>
                            <NavBarContainer/>
                            <Switch>
                                <Route path="/">
                                    <Redirect to="/about" />
                                </Route>
                                <Route path="/slides" component={Slides}/>
                                <Route path="/about" component={AboutContainer}/>
                                <Route exact path="/errorPage" component={ErrorPage} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                        </ErrorBoundaryContainer>
                    </Router>
                </Container>
            </Provider>
        );
    }
}

export default App;
