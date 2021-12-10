import { ActionTypes } from '../actionTypes'
import { PostWriting } from '../../types'
interface HoldPost {
  type: ActionTypes.HOLD_POST
  payload: PostWriting
}
interface ClearPost {
  type: ActionTypes.CLEAR_POST
}

export type PostAction = HoldPost | ClearPost
