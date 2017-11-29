import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

class WithBorder extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super()

    this.state = {
      borderColor: props.color
    }
  }

  onMouseEnter = () => {
    this.setState({borderColor: getRandomColorStyleValue()})
  }

  onMouseLeave = () => {
    this.setState({borderColor: this.props.color})
  }

  render() {
    return (
      <div className="with-border"
           style={{borderColor: this.state.borderColor}}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        {this.props.children}
      </div>
    )
  }
}

export class MainView extends Component {
  static propTypes = {
    data: PropTypes.array,
    tags: PropTypes.array.isRequired,
    updateTags: PropTypes.func.isRequired,
    color: PropTypes.string,
    columns: PropTypes.array
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
              data={this.props.data}
              columns={this.props.columns}
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
