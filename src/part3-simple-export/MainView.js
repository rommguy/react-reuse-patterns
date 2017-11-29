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

const TableWithBorder = props => (
  <WithBorder color={props.color}>
    <ReactTable columns={props.columns}
                data={props.data}
                defaultPageSize={props.defaultPageSize}/>
  </WithBorder>
)

TableWithBorder.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
  defaultPageSize: PropTypes.number
}

const TagsWithBorder = props => (
  <WithBorder color={props.color}>
    <TagsInput value={props.value}
               onChange={props.onChange}/>
  </WithBorder>
)

TagsWithBorder.propTypes = {
  color: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func
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
    const {columns, color, data} = this.props
    return (
      <div className="main-view">
        <div className="table-container">
          <TableWithBorder color={color}
                           columns={columns}
                           data={data}
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
