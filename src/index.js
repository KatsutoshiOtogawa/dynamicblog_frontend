import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import TarentDetailReducer from './reducers/TarentDetailReducer';
import thunk from 'redux-thunk';
import TarentDetail from './components/TarentDetail'
import TarentBraSize from './components/TarentBraSize'
import TarentFace from './components/TarentFace'
import TarentTimeline from './components/TarentTimeline'

import ButtonAppBar from './components/ButtonAppBar'

const store = createStore(
  TarentDetailReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ButtonAppBar />
    <BrowserRouter>
      <Switch>
        <Route
            path = "/tarent/:id"
            component = {TarentDetail}
        />
        <Route
            path = "/tarent_brasize/:id"
            component = {TarentBraSize}
        />
        <Route
            path = "/tarent_face/:id"
            component = {TarentFace}
        />
        <Route
            path = "/tarent_timeline/:tarent_id"
            component = {TarentFace}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
