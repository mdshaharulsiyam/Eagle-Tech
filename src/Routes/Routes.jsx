import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Errorelemant from './Errorelemant';

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
           
          ],
        },
      ]);



export default router