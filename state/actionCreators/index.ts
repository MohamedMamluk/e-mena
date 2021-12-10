import { Dispatch } from 'redux'
import { PostWriting } from '../../types'
import { PostAction } from '../actions'
import { ActionTypes } from '../actionTypes'

export const holdPost = (post: PostWriting) => {
  return (dispatch: Dispatch<PostAction>) => {
    dispatch({
      type: ActionTypes.HOLD_POST,
      payload: post
    })
  }
}
export const clearPost = () => {
  return (dispatch: Dispatch<PostAction>) => {
    dispatch({
      type: ActionTypes.CLEAR_POST
    })
  }
}
