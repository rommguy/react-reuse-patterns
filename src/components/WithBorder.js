import './WithBorder.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withState} from 'recompose'

class WithBorderInner extends Component {
  static propTypes = {
    color: PropTypes.string,
    mouseOver: PropTypes.bool.isRequired,
    updateMouseState: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={`with-border ${this.props.mouseOver ? 'mouse-over' : ''}`}
           style={{borderColor: this.props.color}}
           onMouseEnter={() => this.props.updateMouseState(true)}
           onMouseLeave={() => this.props.updateMouseState(false)}>
        {this.props.children}
      </div>
    )
  }
}

export const WithBorder = withState('mouseOver', 'updateMouseState', false)(WithBorderInner)