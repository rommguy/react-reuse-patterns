import {initialState} from '../appInitialState'

export const todoReducer = (todos = initialState.todos, action) => {
  switch (action.type) {
    default:
      return todos
  }
}