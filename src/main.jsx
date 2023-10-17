import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './Context/Context.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </React.StrictMode>,
)
