import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import UserScreen from './pages/UserScreen';
import CommunityScreen from './pages/CommunityScreen';
import QuestionScreen from './pages/QuestionScreen';
import ExamScreen from './pages/ExamScreen';
import QuizScreen from './pages/QuizScreen';


const router = createBrowserRouter(
  [
    { path: '/', element: < LoginScreen />, },
    { path: '/Home', element: < HomeScreen />, },
    { path: '/UserScreen', element: < UserScreen />, },
    { path: '/CommunityScreen', element: < CommunityScreen />, },
    { path: '/QuestionScreen', element: < QuestionScreen />, },
    { path: '/ExamScreen', element: < ExamScreen />, },
    { path: '/QuizScreen', element: < QuizScreen />, },

  ]
) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
