import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <AppRouter />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
)
