import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import {columns} from '../constants/columns'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

class WithBorder extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  constructor() {
    super()

    this.state = {
      borderColor: null
    }
  }

  onMouseEnter = () => {
    this.setState({borderColor: getRandomColorStyleValue()})
  }

  onMouseLeave = () => {
    this.setState({borderColor: null})
  }

  render() {
    const borderColor = this.state.borderColor || this.props.color

    return (
      <div className="with-border"
           style={{borderColor}}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        {this.props.children}
      </div>
    )
  }
}

export class MainView extends Component {
  static propTypes = {
    userData: PropTypes.array,
    tags: PropTypes.array.isRequired,
    updateTags: PropTypes.func.isRequired,
    color: PropTypes.string
  }

  updateTags = newTags => {
    this.props.updateTags(newTags)
  }

  render() {
    return (
      <div className="main-view">
        <div className="table-container">
          <WithBorder color={this.props.color}>
            <ReactTable
              data={this.props.userData}
              columns={columns}
              defaultPageSize={5}/>
          </WithBorder>
        </div>
        <div className="tags-container">
          <WithBorder color={this.props.color}>
            <TagsInput value={this.props.tags} onChange={this.updateTags}/>
          </WithBorder>
        </div>
      </div>
    )
  }
}
