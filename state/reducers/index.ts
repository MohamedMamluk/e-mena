import { combineReducers } from 'redux'
import postReducer from './postReducer'

const reducers = combineReducers({
  post: postReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
