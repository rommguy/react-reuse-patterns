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

const WithBorderHOC = Component => props => (
  <WithBorder color={props.color}>
    <Component {...props}/>
  </WithBorder>
)

const TableWithBorder = WithBorderHOC(ReactTable)
const TagsWithBorder = WithBorderHOC(TagsInput)

export class MainView extends Component {
  static propTypes = {
    userData: PropTypes.array,
    tags: PropTypes.array.isRequired,
    updateTags: PropTypes.func.isRequired,
    color: PropTypes.string,
    columns: PropTypes.array
  }

  updateTags = newTags => {
    this.props.updateTags(newTags)
  }

  render() {
    const {columns, color, userData} = this.props
    return (
      <div className="main-view">
        <div className="table-container">
          <TableWithBorder columns={columns}
                           color={color}
                           data={userData}
                           defaultPageSize={5}/>
        </div>
        <div className="tags-container">
          <TagsWithBorder color={color}
                          value={this.props.tags}
                          onChange={this.updateTags}/>
        </div>
      </div>
    )
  }
}
