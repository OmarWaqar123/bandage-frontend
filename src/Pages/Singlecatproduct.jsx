import React,{useContext} from 'react'
import CartComponent from '../Components/CartComponent'
import { UserContext } from '../Contexts/Usercontext'
import { Navigate,useNavigate } from 'react-router-dom'
import { BurgerContext } from '../Contexts/BurgericonContext'
import { CartmembersContext } from '../Contexts/cartmembers'
import Singlecatproductcomp from "../Components/Singlecatproductcomp"
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"

export default function Singlecatproduct() {
    const {UserInfo,Setuserinfo} = useContext(UserContext)
    const{burgerOpen,SetburgerOpen} = useContext(BurgerContext)
    const {cartmembers,SetCartmembers} = useContext(CartmembersContext)
  
  
  return (
    <div>
    <Navbar burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen} cartmembers={cartmembers} SetCartmembers={SetCartmembers} />
    <Singlecatproductcomp/>
    <Footer/>

    </div>
  )
}
