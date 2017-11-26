import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import TagsInput from 'react-tagsinput'

export class MainView extends Component {
  static propTypes = {
    data: PropTypes.array,
    tags: PropTypes.array.isRequired,
    updateTags: PropTypes.func.isRequired,
    color: PropTypes.string,
    columns: PropTypes.array
  }

  constructor(props) {
    super()

    this.state = {
      borderColor: props.color
    }
  }

  updateTags = newTags => {
    this.props.updateTags(newTags)
  }

  onMouseEnter = () => {
    this.setState({borderColor: getRandomColorStyleValue()})
  }

  onMouseLeave = () => {
    this.setState({borderColor: this.props.color})
  }

  render() {
    return (
      <div className="main-view">
        <div className="table-container">
          <div className="with-border"
               style={{borderColor: this.state.borderColor}}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}>
            <ReactTable
              data={this.props.data}
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
