import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import TagsInput from 'react-tagsinput'

export class MainView extends Component {
  static propTypes = {
    userData: PropTypes.array,
    tags: PropTypes.array.isRequired,
    updateTags: PropTypes.func.isRequired,
    color: PropTypes.string,
    columns: PropTypes.array
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
          <div className="with-border"
               style={{borderColor}}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}>
            <ReactTable
              data={this.props.userData}
              columns={this.props.columns}
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
