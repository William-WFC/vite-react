import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import StoreCount from './StoreCount'
import { useNavigate } from "react-router-dom";
import { Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setIsFirst } from '../store/reducer/counterSlice';

export default function() {
  const [count, setCount] = useState(0)
  const isFirst = useSelector(state => state.counter.isFirst)
  const dispatch = useDispatch()
  const navigate = useNavigate();
//   保证首次进入登录页
  if (isFirst) {
    message.warning('登录失效，请重新登录')
      setTimeout(() => {
          navigate('/login')
      }, 0)
      dispatch(setIsFirst(false))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <StoreCount></StoreCount>
      <br />
      <br />
      <Button onClick={() => navigate('/count')}>to count</Button>
    </>
  )
}

