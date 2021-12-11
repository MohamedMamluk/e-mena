//TEST
import { ActionTypes } from '../actionTypes'
import { PostAction } from '../actions'
import { PostWriting } from '../../types'
const initialstate = {
  category: '',
  content: '',
  image: '',
  subTitle: '',
  title: ''
}
const postReducer = (state: PostWriting = initialstate, action: PostAction) => {
  switch (action.type) {
    case ActionTypes.HOLD_POST:
      state = action.payload
      return state
    case ActionTypes.CLEAR_POST:
      state = { category: '', content: '', image: '', subTitle: '', title: '' }
      return state

    default:
      return state
  }
}
export default postReducer
