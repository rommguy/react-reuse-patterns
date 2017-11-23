import './MainView.css'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {WithBorder} from './WithBorder'
import {WithBorderHOC} from './WithBorderHOC'
import {map, identity} from 'lodash/fp'
import {columns} from '../constants/columns'
import TagsInput from 'react-tagsinput'
import {TableWithBorder} from './TableWithBorder'
import 'react-tagsinput/react-tagsinput.css'


//const TableWithBorder = WithBorderHOC(ReactTable) // created statically

class InnerMainView extends Component {
  static propTypes = {
    userData: PropTypes.object
  }

  constructor() {
    super()

    this.state = {
      tags: ['Too', 'Many', 'People']
    }

    this.updateTags = tags => {
      this.setState({tags})
    }
  }

  render() {
    const dataArr = map(identity, this.props.userData)
    return (
      <div className="main-view">
        <TableWithBorder
          color={'#ffff00'}
          data={dataArr}
          columns={columns}
          defaultPageSize={5}/>
        <TagsInput value={this.state.tags} onChange={this.updateTags}/>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {userData: state.userData}
}
export const MainView = connect(mapStateToProps)(InnerMainView);