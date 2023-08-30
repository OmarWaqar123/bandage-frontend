import React,{useContext} from 'react'
import { BurgerContext } from '../Contexts/BurgericonContext'
import { CartmembersContext } from '../Contexts/cartmembers'
import Navbar from '../Components/Navbar'
import Aboutcomponent from '../Components/Aboutcomponent'
import Footer from '../Components/Footer'

export default function CartPage() {
  
  const{burgerOpen,SetburgerOpen} = useContext(BurgerContext)
  const {cartmembers,SetCartmembers} = useContext(CartmembersContext)


  

  return  (
    <div>
      <Navbar burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen} cartmembers={cartmembers} SetCartmembers={SetCartmembers} />
      <Aboutcomponent/>
      <Footer/>
      
    </div>
  )
}
