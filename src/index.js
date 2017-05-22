// Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './redux/reducers/reducers';
import { createStore, applyMiddleware, compose } from 'redux';

// Css
import './scss/styles.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

const rootEl = document.getElementById('app');

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

render()
store.subscribe(render)

export default store;
