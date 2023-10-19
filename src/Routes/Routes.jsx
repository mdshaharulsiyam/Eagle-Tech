import React, { useContext } from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Errorelemant from './Errorelemant';
import AddProduct from '../Pages/AddProduct/AddProduct';
import BrandsProducts from '../Pages/BrandsProducts/BrandsProducts';
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
              element: <AddProduct></AddProduct>,
            },
            {
              path: "/brandsproducts/:brand",
              element: <BrandsProducts></BrandsProducts>,
            },
           
          ],
        },
      ]);

export default router