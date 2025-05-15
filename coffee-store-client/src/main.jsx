import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Components/Home.jsx';
import Rootlayout from './RootLayout/Rootlayout.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
    children:[
      {
        index:true,
        loader:()=>fetch('http://localhost:3000/coffees'),
        Component:Home,
      },
      {
        path:'/addCoffee',
        Component:AddCoffee,
      },
      {
        path:'/coffee/:id',
        Component:CoffeeDetails,
      },
      {
        path:'/updateCoffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:UpdateCoffee,
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
