import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from './store/store';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state: RootState) => state.cash)

  const addCash = (cash: number) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }
  const getCash = (cash: number) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <div className='App'>
      <div>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Поповнити рахунок</button>
        <button onClick={() => getCash(Number(prompt()))}>Зняти з рахунка</button>
      </div>
    </div>
  );
}

export default App;
