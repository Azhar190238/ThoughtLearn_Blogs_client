import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Root/Root';
 import ErrorPage from './Components/Home/ErrorPage/ErrorPage';
import Login from './Components/Owner/Login';
import Register from './Components/Owner/Register';
import AuthProvider from './Components/Providers/AuthProvider';
import PrivateRoute from './Components/Providers/PrivateRoute';
import About from './Components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: ()=> fetch('https://assignment-10-server-tan-sigma.vercel.app/addSpot')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <PrivateRoute>  <About></About> </PrivateRoute>
       
      },


    ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
