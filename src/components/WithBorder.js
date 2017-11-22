import './WithBorder.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getRandomColorStyleValue} from '../utils'

export class WithBorder extends Component {
  static propTypes = {
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
    return (
      <div className={`with-border ${this.state.borderColor ? 'mouse-over' : ''}`}
           style={{borderColor}}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        {this.props.children}
      </div>
    )
  }
}
