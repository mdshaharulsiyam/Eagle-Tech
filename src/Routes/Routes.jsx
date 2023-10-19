import React, { useContext } from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Errorelemant from './Errorelemant';
import AddProduct from '../Pages/AddProduct/AddProduct';
import BrandsProducts from '../Pages/BrandsProducts/BrandsProducts';
import Detailspage from '../Pages/Detailspage/Detailspage';
import UpdatePage from '../Pages/UpdatePage/UpdatePage';
import MyCart from '../Pages/MyCart/MyCart';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import PrivetRoute from '../ProvetRoute/PrivetRoute';
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement:<Errorelemant></Errorelemant>,
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/addproduct",
              element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>,
            },
            {
              path: "/brandsproducts/:brand",
              element: <BrandsProducts></BrandsProducts>,
            },
            {
              path: "/details/:id",
              element: <Detailspage></Detailspage>,
            },
            {
              path: "/update/:id",
              element: <UpdatePage></UpdatePage>,
            },
            {
              path: "/mycart",
              element: <MyCart></MyCart>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/signup",
              element: <SignUp></SignUp>,
            },
          ],
        },
      ]);

export default router