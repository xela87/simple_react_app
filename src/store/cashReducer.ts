const ADD_CASH = 'ADD_CASH'
const GET_CASH = 'GET_CASH'

const initialState = {
  cash: 50,
}

export const cashReducer = (state = initialState, action: {type: string, payload: number}) => {
  switch (action.type){
    case ADD_CASH:
      return {...state, cash: state.cash + action.payload}
    case GET_CASH:
      return {...state, cash: state.cash - action.payload}
    default: return state
  }
}
