const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'



const initialState = {
  customers: [{}]
}

export const customerReducer = (state = initialState, action: {type: string, payload: any}) => {
  switch (action.type){
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      // @ts-ignore
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    case ADD_MANY_CUSTOMERS:
      return {...state, customers: [...state.customers, ...action.payload]}
    default: return state
  }
}

export const addCustomerAction = (payload: any) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload: any) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload: any) => ({type: REMOVE_CUSTOMER, payload})
