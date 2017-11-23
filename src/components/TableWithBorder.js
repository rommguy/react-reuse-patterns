import './MainView.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'

export class TableWithBorder extends Component {
  static propTypes = {
    columns: PropTypes.object,
    data: PropTypes.object,
    defaultPageSize: PropTypes.number,
    color: PropTypes.string
  }

  constructor() {
    super()

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {borderColor: null}
  }

  onMouseEnter() {
    this.setState({borderColor: getRandomColorStyleValue()})
  }

  onMouseLeave() {
    this.setState({borderColor: null})
  }

  render() {
    const borderColor = this.state.borderColor || this.props.color
    const {defaultPageSize, data, columns} = this.props
    return (
      <div className={`with-border ${this.state.borderColor ? 'mouse-over' : ''}`}
           style={{borderColor}}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        <ReactTable data={data}
                    columns={columns}
                    defaultPageSize={defaultPageSize}/>
      </div>
    )
  }
}
