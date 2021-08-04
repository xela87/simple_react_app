import {addManyCustomersAction} from '../store/customerReducer';

export const fetchCustomers = () => {
  return (dispatch: any) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomersAction(json)))
  }

}
