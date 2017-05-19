// Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import reducer from './redux/reducers/feeds';
import { Provider } from 'react-redux'

// Css
import './scss/styles.scss';

// App entry point
const store = createStore(reducer);
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
