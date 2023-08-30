import React, { useContext } from 'react'
import Navbar from "../Components/Navbar.jsx"
import "../SASS/Navbar.scss"
import HeroComponent from '../Components/HeroComponent.jsx'
import EditorpickComponent from "../Components/EditorpickComponent.jsx"
import Bestsellertext from "../Components/bestsellertext.jsx"
import { BurgerContext } from '../Contexts/BurgericonContext.jsx'
import { CartmembersContext } from '../Contexts/cartmembers.jsx'
import Mainproducts from '../Components/Mainproducts.jsx'
import Footer from '../Components/Footer.jsx'

export default function Homepage() {
  const{burgerOpen,SetburgerOpen} = useContext(BurgerContext)
  
  const {cartmembers,SetCartmembers} = useContext(CartmembersContext)
  return (
    <>
      <Navbar burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen} cartmembers={cartmembers} SetCartmembers={SetCartmembers} />
      <HeroComponent burgerOpen={burgerOpen} SetburgerOpen={SetburgerOpen}/>
      <EditorpickComponent/>
      <Bestsellertext/>
      <Mainproducts/>
      <Footer/>
    </>
  )
}
