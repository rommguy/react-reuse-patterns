import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {WithBorder} from './WithBorder'
import {getRandomColorStyleValue} from '../utils'
import {WithBorderHOC} from './WithBorderHOC'
import {map, identity} from 'lodash/fp'
import {columns} from '../constants/columns'
import TagsInput from 'react-tagsinput'
import {TableWithBorder} from './TableWithBorder'
import 'react-tagsinput/react-tagsinput.css'


//const TableWithBorder = WithBorderHOC(ReactTable) // created statically


class DyanmicWithState extends Component {
  static propTypes = {
    initialState: PropTypes.any
  }

  constructor(props) {
    super()

    this.state = {myState: props.initialState}
  }

  updateState = val => this.setState({myState: val})

  render() {
    return this.props.children(this.state.myState, this.updateState)
  }
}

class StatelessWithBorder extends Component {
  static propTypes = {
    borderColor: PropTypes.string,
    replaceColor: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={`with-border ${this.props.borderColor ? 'mouse-over' : ''}`}
           style={{borderColor: this.props.borderColor}}
           onMouseEnter={() => this.props.replaceColor(getRandomColorStyleValue())}
           onMouseLeave={() => this.props.replaceColor(null)}>
        {this.props.children}
      </div>
    )
  }
}

export class MainView extends Component {
  static propTypes = {
    userData: PropTypes.object
  }

  constructor() {
    super()

    this.state = {
      tags: ['Too', 'Many', 'People']
    }
  }

  updateTags = tags => {
    this.setState({tags})
  }

  render() {
    const dataArr = map(identity, this.props.userData)
    return (
      <div className="main-view">
        <div className="table-container">
          <TableWithBorder
            color={'#ffff00'}
            data={dataArr}
            columns={columns}
            defaultPageSize={5}/>
        </div>
        <div className="tags-container">
          <DyanmicWithState initialState={null}>
            {(borderColor, replaceColor) => (
              <StatelessWithBorder replaceColor={replaceColor} borderColor={borderColor}>
                <TagsInput value={this.state.tags} onChange={this.updateTags}/>
              </StatelessWithBorder>
            )}
          </DyanmicWithState>
        </div>
      </div>
    )
  }
}
