import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import { Provider } from "react-redux";
import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./reduxConfig/reducer";
import "babel-polyfill"

import { HashRouter as Router } from 'react-router-dom'
import { LocaleProvider } from 'antd';
// import { Router } from 'react-router'
// const createHistory = require("history").createHashHistory;
// const history = createHistory()

//仓库创建
const store = createStore(
    combineReducers({ ...reducer }),
    applyMiddleware(thunk)
);

store.subscribe(() => {
    //   console.log(store.getState());
});

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <LocaleProvider locale={zh_CN} >
                <App />
            </LocaleProvider>
        </Provider></Router>,
    document.getElementById("root")
);
registerServiceWorker();
