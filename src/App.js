import React, { Component } from 'react';
import NavBarContainer from './components/Nav/NavBarContainer';
import HelpContainer from './components/Help/HelpContainer';
import NotFound from './components/Error/NotFound'
import SlidesContainer from './components/Slides/SlidesContainer';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loadedState from './initialState';
import rootReducer from './reducers';
import { Router, Switch, Route } from 'react-router-dom';
import SlidePrintManager from './components/Slides/Menu/SlidePrintManager';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import ErrorBoundaryContainer from './components/Error/ErrorBoundaryContainer';
import ErrorPage from './components/Error/ErrorPage';
import HomePageContainer from './components/Home/HomePageContainer';
import SessionTimeoutModalContainer, {startTimer} from './components/SessionTimeout/SessionTimeoutModalContainer';

const cacheStore = window.sessionStorage.getItem('redux-store');
const initialState = cacheStore ?
    JSON.parse(cacheStore) :
    loadedState;
const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const saveState = () => {
    window.sessionStorage.setItem('redux-store', JSON.stringify(store.getState()));
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
    startTimer(store.dispatch);
});

store.subscribe(function () {
    console.log(store.getState())
    startTimer(store.dispatch);
});

store.subscribe(saveState);

SlidePrintManager.getInstance().setReduxStore(store);

class App extends Component {
	
    componentDidMount() {
    	logPageView(window.location, '');
    }

    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <Router history={history}>
                        <ErrorBoundaryContainer>
                        <div>
                            <NavBarContainer/>
                            <SessionTimeoutModalContainer/>
                            <Switch>
                                <Route exact path='/' component={HomePageContainer}/>
                                <Route exact path='/slides' component={SlidesContainer}/>
                                <Route exact path='/help' component={HelpContainer}/>
                                <Route exact path='/oops' component={ErrorPage} />
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
