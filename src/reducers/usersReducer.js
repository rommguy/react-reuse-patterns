import {initialState} from '../appInitialState'

export const usersDataReducer = (usersData = initialState.usersData, action) => {
  switch (action.type) {
    default:
      return usersData
  }
}