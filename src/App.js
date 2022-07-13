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
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import SlidePrintManager from './components/Slides/Menu/SlidePrintManager';
import ReactGA from 'react-ga';
import { createBrowserHistory }  from 'history';
import ErrorBoundaryContainer from './components/Error/ErrorBoundaryContainer';
import ErrorPage from './components/Error/ErrorPage';
import HomePageContainer from './components/Home/HomePageContainer';
import SessionTimeoutModalContainer from './components/SessionTimeout/SessionTimeoutModalContainer';
import { startTimer } from './actions/SessionTimeout/sessionTimeoutAction';

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
const history = createBrowserHistory();
history.listen((location, action) => {
    startTimer(store.dispatch);
    logPageView(location, action);
});

store.subscribe(function () {
    console.log(store.getState())
    startTimer(store.dispatch);
});

store.subscribe(saveState);

SlidePrintManager.getInstance().setReduxStore(store);

class App extends Component {
	
    componentDidMount() {
        startTimer(store.dispatch);
    	logPageView(window.location, '');
    }

    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <BrowserRouter history={history}>
                        <ErrorBoundaryContainer>
                        <div>
                            <NavBarContainer/>
                            <SessionTimeoutModalContainer/>
                            <Switch>
                                <Route exact path='/' component={HomePageContainer}/>
                                <Route path='/slides' component={SlidesContainer}/>
                                <Route path='/help' component={HelpContainer}/>
                                <Route path='/oops' component={ErrorPage} />
                                <Route path='*' component={NotFound} />
                            </Switch>
                        </div>
                        </ErrorBoundaryContainer>
                    </BrowserRouter>
                </Container>
            </Provider>
        );
    }
}

export default App;
