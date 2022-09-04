import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { createBrowserHistory } from "history";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers";


//import './App.css';
// import './assets/scss/style.scss';
import "./assets/css/bootstrap.min.css";
import "./assets/css/tobii.min.css";
import "./assets/css/tiny-slider.css";
import "./assets/css/style.min.css";
import "./assets/css/irun.css";
import "./assets/css/tabs.css";
import "./assets/css/colors/default.css";

// Scripts

const history = createBrowserHistory();

const store = createStore(reducers, applyMiddleware(thunk));

const persistor = persistStore(store);
export { persistor, store };


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <App />
  </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
