import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import {columns} from '../constants/columns'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

export class MainView extends Component {
  static propTypes = {
    userData: PropTypes.array,
    tags: PropTypes.array.isRequired,
    updateTags: PropTypes.func.isRequired,
    color: PropTypes.string
  }

  constructor() {
    super()

    this.state = {
      borderColor: null
    }
  }

  updateTags = newTags => {
    this.props.updateTags(newTags)
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
      <div className="main-view">
        <div className="table-container">
          <div className={`with-border ${this.state.borderColor ? 'mouse-over' : ''}`}
               style={{borderColor}}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}>
            <ReactTable
              data={this.props.userData}
              columns={columns}
              defaultPageSize={5}/>
          </div>
        </div>
        <div className="tags-container">
              <TagsInput value={this.props.tags} onChange={this.updateTags}/>
        </div>
      </div>
    )
  }
}
