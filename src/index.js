// Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './redux/reducers/reducers';
import { createStore, applyMiddleware } from 'redux'

// Css
import './scss/styles.scss';

let preloadedServerState = {}

// App entry point
const store = createStore(
    reducer,
    preloadedServerState,
    applyMiddleware(
        thunkMiddleware
    )
);
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
