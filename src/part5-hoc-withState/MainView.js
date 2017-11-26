import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

const withState = (stateName, stateUpdaterName, initialStateGetter) => InnerComponent => class OuterComponent extends Component {
  static propTypes = {}

  constructor(props) {
    super()

    this.state = {myState: initialStateGetter(props)}
  }

  updateState = newVal => this.setState({myState: newVal})

  render() {
    const innerProps = {
      [stateName]: this.state.myState,
      [stateUpdaterName]: this.updateState
    }
    return (<InnerComponent {...innerProps} {...this.props}/>)
  }
}

const StatelessWithBorder = props => {
  const borderColor = props.colorInState || props.color

  return (
    <div className="with-border"
         style={{borderColor}}
         onMouseEnter={() => props.updateBorderColor(getRandomColorStyleValue())}
         onMouseLeave={() => props.updateBorderColor(null)}>
      {props.children}
    </div>
  )
}

StatelessWithBorder.propTypes = {
  color: PropTypes.string,
  colorInState: PropTypes.string,
  updateBorderColor: PropTypes.func
}

const WithBorder = withState('colorInState', 'updateBorderColor', null)(StatelessWithBorder)


const WithBorderHOC = Component => props => (
  <WithBorder color={props.color}>
    <Component {...props}/>
  </WithBorder>
)

const TableWithBorder = WithBorderHOC(ReactTable)
const TagsWithBorder = WithBorderHOC(TagsInput)

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
          <TableWithBorder columns={columns}
                           color={color}
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
