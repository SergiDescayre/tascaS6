import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ContextProvider from './context/PresContext'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Index from './pages/Index.jsx'
import BudgetDetail from './components/BudgetDetail.jsx'

const router = createBrowserRouter([
  {path: "/" ,element: <App />},
  {path: "/calculadora" , element: <Index />},
  {path: "/calculadora/:id", element: <BudgetDetail />} 
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <ContextProvider>
    <RouterProvider router={router}/>
  </ContextProvider>
 
)
