import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store'

import MyApp from './App.jsx'
import './index.css'
import { App, ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider>
        <App>
            <MyApp></MyApp>
        </App>
    </ConfigProvider>
  </Provider>,
)
