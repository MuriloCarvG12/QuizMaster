import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';


const router = createBrowserRouter(
  [
    { path: '/', element: < LoginScreen />, },
    { path: '/Home', element: < HomeScreen />, },
  ]
) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
