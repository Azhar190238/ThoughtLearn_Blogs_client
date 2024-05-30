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
import AddBlogs from './Components/AddBlogs/AddBlogs';
import AllBlogs from './Components/AllBlogs/AllBlogs';
import FeatureBlog from './Components/FeaturesBlog/FeatureBlog';
import Wishlist from './Components/Wishlists/Wishlists';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import UpdatedBlog from './Components/UpdatedBlog/UpdatedBlog';
import SubscriberList from './Components/SubsriberList/SubscriberList';
// https://assignment-11-server-side-eta.vercel.app
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/addBlogs')
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
        element: <PrivateRoute><About></About></PrivateRoute>
       
      },
      {
        path: '/allBlog',
        element:<AllBlogs></AllBlogs>,
        loader: ()=> fetch('http://localhost:5000/addBlogs')
       
      },
      {
        path: '/details/:id',
        element: <PrivateRoute> <BlogDetails></BlogDetails> </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/addBlogs/${params.id}`),
       
      },
      {
      path: "/updatedBlog/:id",
      element: <PrivateRoute> <UpdatedBlog></UpdatedBlog> </PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/addBlogs/${params.id}`)
      },
      {
        path: '/featureBlog',
        element:<FeatureBlog></FeatureBlog>,
        loader: ()=> fetch('http://localhost:5000/addBlogs')
       
      },
      {
        path: '/addBlog',
        element: <PrivateRoute>  <AddBlogs></AddBlogs> </PrivateRoute>
       
      },
      {
        path: '/wishlist',
        element: <PrivateRoute>  <Wishlist></Wishlist> </PrivateRoute>,
        loader: ()=> fetch(`http://localhost:5000/wishlist`)
       
      },
      {
        path: '/subscriber',
        element: <PrivateRoute> <SubscriberList></SubscriberList>  </PrivateRoute>,
        loader: ()=> fetch(`http://localhost:5000/subscriber`)
       
      }

      
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
