import React from 'react'
import ProductComponent from '../Components/productComponent'
import Navbar from '../Components/Navbar'
import { BurgerContext } from '../Contexts/BurgericonContext'

import { CartmembersContext } from '../Contexts/cartmembers'
import { useContext } from 'react'
import Footer from "../Components/Footer"

export default function productpage() {
    const{burgerOpen,SetburgerOpen} = useContext(BurgerContext)
    
  const {cartmembers,SetCartmembers} = useContext(CartmembersContext)
  return (
    <div>
        <Navbar burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen} cartmembers={cartmembers} SetCartmembers={SetCartmembers} />
        <ProductComponent/>
        <Footer/>
    </div>
  )
}
