/*
 * @Description: 
 * @Date: 2022/12/03 23:56:01
 * @LastEditTime: 2022/12/03 23:58:01
 */

const initialState = {

}

function reducer(state = initialState, { type , payload }) {
  switch (type) {
    case '1':
      return {...state , 1: payload }
  
    default:
      return state
  }
}

export default reducer