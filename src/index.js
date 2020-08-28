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

const store = createStore(
  TarentDetailReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Switch>
        <Route
            path = "/tarent/:id"
            component = {TarentDetail}
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
