import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import Homepage from "./Pages/Homepage"
import SignupPage from "./Pages/SignupPage"
import Createproduct from "./Pages/Createproductpage"
import Productpage from "./Pages/productpage"
import CartPage from "./Pages/CartPage"
import Checkoutpage from "./Pages/Checkoutpage"
import Singlecatproduct from "./Pages/Singlecatproduct"
import Aboutpage from "./Pages/Aboutpage"

export  const router =  createBrowserRouter([
  {
   path:"/",
   element: <Homepage/>
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/signup",
    element: <SignupPage/>
  },
  {
    path:"/createproduct",
    element: <Createproduct/>
  },
  {
    path:"/product/:id",
    element: <Productpage/>
  },
  {
    path:"/cart",
    element: <CartPage/>

  },{
    path:"/checkout",
    element:<Checkoutpage/>
  }
  ,{
    path:"/singlecategoryproducts",
    element:<Singlecatproduct/>
  }
  ,{
    path:"/aboutncontact",
    element:<Aboutpage/>
  }
])