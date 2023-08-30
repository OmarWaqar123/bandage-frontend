import React,{useContext} from 'react'
import CartComponent from '../Components/CartComponent'
import { UserContext } from '../Contexts/Usercontext'
import { Navigate,useNavigate } from 'react-router-dom'
import { BurgerContext } from '../Contexts/BurgericonContext'
import { CartmembersContext } from '../Contexts/cartmembers'
import Navbar from '../Components/Navbar'



export default function CartPage() {
  const navigate = useNavigate()
  const {UserInfo,Setuserinfo} = useContext(UserContext)
  const{burgerOpen,SetburgerOpen} = useContext(BurgerContext)
  const {cartmembers,SetCartmembers} = useContext(CartmembersContext)


  if(!UserInfo){
    return <Navigate to="/" />;

  }

  return UserInfo && (
    <div>
      <Navbar burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen} cartmembers={cartmembers} SetCartmembers={SetCartmembers} />
      <CartComponent/>
      
    </div>
  )
}
