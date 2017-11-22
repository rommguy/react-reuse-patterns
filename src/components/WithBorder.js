import './WithBorder.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class WithBorder extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  constructor() {
    super()

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {mouseOver: false}
  }

  onMouseEnter() {
    this.setState({mouseOver: true})
  }

  onMouseLeave() {
    this.setState({mouseOver: false})
  }

  render() {
    return (
      <div className={`with-border ${this.state.mouseOver ? 'mouse-over' : ''}`}
           style={{borderColor: this.props.color}}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        {this.props.children}
      </div>
    )
  }
}
