import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter
 
} from "react-router-dom";
import { UserContextProvider } from './Contexts/Usercontext.jsx';
import { BurgerContextProvider } from './Contexts/BurgericonContext.jsx';
import { CartmembersContextProvider } from './Contexts/cartmembers.jsx';
import { CheckoutProvider } from './Contexts/Checkoutprod.jsx';
import {SinglecategoryContextProvider} from "./Contexts/Singlecatproduct.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <CartmembersContextProvider>
    <BurgerContextProvider>
      <SinglecategoryContextProvider>
    <UserContextProvider>
      <CheckoutProvider>
    <RouterProvider router={router}/>
      </CheckoutProvider>
    </UserContextProvider>
    </SinglecategoryContextProvider>
    </BurgerContextProvider>
    </CartmembersContextProvider>

  </React.StrictMode>,
)
