import React,{useContext} from 'react'
import Navbar from '../Components/Navbar'
import { BurgerContext } from '../Contexts/BurgericonContext'
import { CartmembersContext } from '../Contexts/cartmembers'
import Productform from "../Components/Productform"
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Contexts/Usercontext'

export default function () {
    const{burgerOpen,SetburgerOpen} = useContext(BurgerContext)
    const {UserInfo,Setuserinfo} = useContext(UserContext)   
    
  const {cartmembers,SetCartmembers} = useContext(CartmembersContext)
    
    

  if(!UserInfo){
    return <Navigate to="/" />;

  }


  return UserInfo  && (
  
    <>
    
       <Navbar burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen} cartmembers={cartmembers} SetCartmembers={SetCartmembers} />
        <Productform/> 
    
     
    </>
  ) 
}
