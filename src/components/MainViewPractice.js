import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import TagsInput from 'react-tagsinput'

const withState = (stateName, stateUpdaterName, initialStateGetter) => InnerComponent => class OuterComponent extends Component {
  static propTypes = {}

  constructor(props) {
    super()

    this.state = {myState: initialStateGetter(props)}
  }

  updateState = newVal => this.setState({myState: newVal})

  render() {
    const innerCompProps = {
      [stateName]: this.state.myState,
      [stateUpdaterName]: this.updateState
    }
    return (<InnerComponent {...this.props} {...innerCompProps}/>)
  }
}


class WithBorderOld extends Component {
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

const StatelessWithBorder = props => (
  <div className="with-border"
       style={{borderColor: props.borderColor}}
       onMouseEnter={() => props.updateBorderColor(getRandomColorStyleValue())}
       onMouseLeave={() => props.updateBorderColor(props.color)}>
    {props.children}
  </div>
)

StatelessWithBorder.propTypes = {
  borderColor: PropTypes.string,
  color: PropTypes.string,
  updateBorderColor: PropTypes.func
}

const WithBorder = withState('borderColor', 'updateBorderColor', props => props.color)(StatelessWithBorder)

const withBorderHOC = InnerComp => props => (
  <WithBorder color={props.color}>
    <InnerComp {...props}/>
  </WithBorder>
)

const TableWithBorder = withBorderHOC(ReactTable)
const TagsWithBorder = withBorderHOC(TagsInput)

TagsWithBorder.propTypes = {
  color: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func
}

TableWithBorder.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
  defaultPageSize: PropTypes.number
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


class DynamicWithState extends Component {
  static propTypes = {
    initialState: PropTypes.any,
    children: PropTypes.func.isRequired
  }

  constructor(props) {
    super()

    this.state = {myState: props.initialState}
  }

  updateState = newValue => this.setState({myState: newValue})

  render() {
    return this.props.children(this.state.myState, this.updateState)
  }
}

DynamicWithState.propTypes = {
  initialState: PropTypes.any
}
