import React,{useContext} from 'react'
import CheckoutComponent from '../Components/CheckoutComponent'
import Navbar from '../Components/Navbar'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Contexts/Usercontext'
import {BurgerContext} from "../Contexts/BurgericonContext"
import { CartmembersContext } from '../Contexts/cartmembers'



export default function Checkoutpage() {
    // const navigate = useNavigate()
    const {UserInfo,Setuserinfo} = useContext(UserContext)
    const{burgerOpen,SetburgerOpen} = useContext(BurgerContext)
    const {cartmembers,SetCartmembers} = useContext(CartmembersContext)
  
  
    if(!UserInfo){
        return <Navigate to="/" />;

    }
  
  return UserInfo && (
    <div>
              <Navbar burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen} cartmembers={cartmembers} SetCartmembers={SetCartmembers} />
              <CheckoutComponent/>
    </div>
  )
}
