import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home'
import CreateNewUser from './components/CreateNewUser'
import EditUser from './components/EditUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <p>Error Element</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add',
        element: <CreateNewUser></CreateNewUser>
      },
      {
        path: '/edit',
        element: <EditUser></EditUser> 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
