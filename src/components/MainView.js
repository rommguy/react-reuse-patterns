import './MainView.css'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {WithBorder} from './WithBorder'
import {WithBorderHOC} from './WithBorderHOC'
import {map, identity} from 'lodash/fp'
import {columns} from '../constants/columns'


const TableWithBorder = WithBorderHOC(ReactTable) // created statically

class InnerMainView extends Component {
  static propTypes = {
    userData: PropTypes.object
  }

  render() {
    const dataArr = map(identity, this.props.userData)
    return (
      <div className="main-view">
        <WithBorder color={'#ffff00'}>
          {dataArr.length ? (<ReactTable
            data={dataArr}
            columns={columns}
            defaultPageSize={10}/>) : null}
        </WithBorder>
        <TableWithBorder data={dataArr}
                             columns={columns}
                             defaultPageSize={10}
                             color={'red'}/>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {userData: state.userData}
}
export const MainView = connect(mapStateToProps)(InnerMainView);