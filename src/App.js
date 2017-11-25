import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MainView} from './components/MainView'
import 'react-table/react-table.css'

const usersData = {
  '0001': {firstName: 'comfort', lastName: 'account', age: 27, status: 'relationshipnail', visits: 59},
  '0002': {firstName: 'tin', lastName: 'throne', age: 20, status: 'relationship', visits: 53},
  '0003': {firstName: 'trains', lastName: 'highway', age: 29, status: 'hand', visits: 2},
  '0004': {firstName: 'difficulty', lastName: 'clock', age: 28, status: 'single', visits: 89},
  '0005': {firstName: 'window', lastName: 'honey', age: 29, status: 'complicated', visits: 7},
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MainView usersData={usersData} />
      </div>
    );
  }
}

export default App;
