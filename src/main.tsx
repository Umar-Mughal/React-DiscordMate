import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import App from './App'
import './index.css'
import ApiContextProvider from "./contexts/ApiContext";
import Dashboard from "./components/KashMonitors/Dashboard";
import Login from "./components/KashMonitors/Login";
import Dashboard2 from "./components/KashMonitors/Dashboard2";

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <ApiContextProvider><Dashboard /></ApiContextProvider>,
  },
  {
    path: '/i/:id',
    element: <ApiContextProvider><Dashboard2 /></ApiContextProvider>,
  },
  {
    path: '/login',
    element: <ApiContextProvider><Login /></ApiContextProvider>,
  },
  {
    path: '/*',
    element: <ApiContextProvider><Dashboard/></ApiContextProvider>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
