import './WithBorder.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const WithBorderHOC = WrappedComponent => class WithBorderWrapper extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  render() {
    return (
      <div style={{border: `5px solid ${this.props.color}`}}>
        <WrappedComponent {...this.props}/>
      </div>
    )
  }
}