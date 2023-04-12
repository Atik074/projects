import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader:()=> fetch('/data.json')
      },
      {
        path:'/details/:detailsId',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('/data.json')
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

