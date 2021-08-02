import {createStore} from 'redux';

export type RootState = ReturnType<typeof reducer>

const initialState = {
  cash: 50,
}

const reducer = (state = initialState, action: {type: string, payload: number}) => {
  switch (action.type){
    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payload}
    case 'GET_CASH':
      return {...state, cash: state.cash - action.payload}
    default: return state
  }
}

export const store = createStore(reducer)
