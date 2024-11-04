// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import About from './pages/About';
import { Cart } from './pages/cart';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


//Router to create layout of react project in the browser

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'products',
                element: <ProtectedRoute element={<Products />}/>,
            },
            {
              path: 'profile',
              element: <ProtectedRoute element={<Profile />}/>,
          },
            {
              path: 'about',
              element: <ProtectedRoute element={<About />}/>,
          },
            {
              path: 'gallery',
              element: <ProtectedRoute element={<Gallery />}/>,
          },
            {
                path: 'contact',
                element: <ProtectedRoute element={<Contact />}/>,
            },
            {
                path: 'cart',
                element: <ProtectedRoute element={<Cart />}/>,
            },
        ],
    },
]);

ReactDOM.render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>,
  document.getElementById('root')
);