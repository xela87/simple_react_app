import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';
import {addCustomerAction, removeCustomerAction} from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state: RootState) => state.cash.cash)
  const customers = useSelector((state: RootState) => state.customers.customers)

  const addCash = (cash: number) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }
  const getCash = (cash: number) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name: string|null) => {
    const customer = {
      name: name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  const deleteCustomer = (customer: { name?: any; id?: number }) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className='container'>
      <div className="cashView">{cash} $</div>
      <div className="content" >
        <button className="btn" onClick={() => addCash(Number(prompt()))}>Поповнити рахунок</button>
        <button className="btn" onClick={() => getCash(Number(prompt()))}>Зняти з рахунка</button>
        <button className="btn" onClick={() => addCustomer(prompt())}>Додати клієнта</button>
        <button className="btn" onClick={() => dispatch(fetchCustomers())}>Отримати клієнтів із БД</button>
      </div>
      {customers.length > 1 ?
        <div className="customer">
          {customers.map((customer: { name?: any; id?: number; }) => <div className="customer" onClick={() => deleteCustomer(customer)}>{customer.name}</div>)}
        </div>
        :
        <div className="customer">
          Клієнти відсутні
        </div>}
    </div>
  );
}

export default App;
