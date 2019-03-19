import * as constants from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case constants.INPUT_FOCUS_ACTION:
      return prevState.set('isFocused', true);
    case constants.INPUT_BLUR_ACTION:
      return prevState.set('isFocused', false);
    case constants.CHANGE_LIST_ACTION:
      // merge 是另一种语法，可以解决多个 set 写在一起太多了的毛病，
      // 直接通过 merge 整合写在一起方便
      return prevState.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER_ACTION:
      return prevState.set('mouseIn', true);
    case constants.MOUSE_LEAVE_ACTION:
      return prevState.set('mouseIn', false);
    case constants.CHANGE_PAGE_ACTION:
      return prevState.set('page', action.page);
    default:
      return prevState
  }
}