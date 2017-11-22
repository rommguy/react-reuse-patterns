import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux'
import {todoReducer} from './reducers/todoReducer'
import {usersDataReducer} from './reducers/usersReducer'

const reducer = combineReducers({
  todos: todoReducer,
  userData: usersDataReducer
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
