import * as constants from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
  type: constants.CHANGE_LIST_ACTION,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const inputFocusAction = () => ({
  type: constants.INPUT_FOCUS_ACTION
});

export const inputBlurAction = () => ({
  type: constants.INPUT_BLUR_ACTION
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER_ACTION
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE_ACTION
})
export const pageChange = (currentPage) => ({
  type: constants.CHANGE_PAGE_ACTION,
  page: currentPage
})


export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(changeList(data.list))
      }).catch((error) => {
      console.log(error);
    })
  }
}