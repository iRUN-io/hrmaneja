import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getUser } from './config/common';
// import registerServiceWorker from './registerServiceWorker';
// logout if user is not logged in
if (!getUser()) {
    if (window.location.pathname !== '/login' && window.location.pathname !== '/forgotpassword') {
    window.location.href = '/login';
    }
}
ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
