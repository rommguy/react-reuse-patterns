import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import {MainView} from './part1-no-reuse/MainView'
//import {MainView} from './part2-simple-composition/MainView'
//import {MainView} from './part3-simple-export/MainView'
//import {MainView} from './part5-hoc-withState/MainView'
import {MainView} from './part6-dynamicWithState/MainView'
import {withState} from 'recompose'
import 'react-table/react-table.css'
import {map, identity} from 'lodash/fp'
import {columns} from './constants/columns'
import 'react-tagsinput/react-tagsinput.css'

const usersData = {
  '0001': {firstName: 'comfort', lastName: 'account', age: 27, status: 'relationshipnail', visits: 59},
  '0002': {firstName: 'tin', lastName: 'throne', age: 20, status: 'relationship', visits: 53},
  '0003': {firstName: 'trains', lastName: 'highway', age: 29, status: 'hand', visits: 2},
  '0004': {firstName: 'difficulty', lastName: 'clock', age: 28, status: 'single', visits: 89},
  '0005': {firstName: 'window', lastName: 'honey', age: 29, status: 'complicated', visits: 7},
}

const StatefullMainView = withState('tags', 'updateTags', ['Too', 'Many', 'People'])(MainView)

class App extends Component {
  render() {
    const dataArr = map(identity, usersData)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StatefullMainView
          color="#80de7e"
          data={dataArr}
          columns={columns}/>
      </div>
    );
  }
}

export default App;
