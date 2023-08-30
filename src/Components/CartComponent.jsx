import React,{useContext} from 'react'
import { CartmembersContext } from '../Contexts/cartmembers'
import Cartelements from './Cartelements'
import "../SASS/cartComponent.scss"

export default function CartComponent() {
  
    const {cartmembers,SetCartmembers} = useContext(CartmembersContext)

    // console.log({"cartcomp": cartmembers})
  return (
    <div>
      <div className='cart-comp'>
        {cartmembers.length > 0 ?
        <div className='cartElem-comp'>
            {cartmembers.map(cartitem => {
                return <Cartelements
                category={cartitem.category}
                productname={cartitem.productname}
                price={cartitem.price}
                image={cartitem.image}
                productid={cartitem.productid}
                cartelementid = {cartitem._id}
                SetCartmembers={SetCartmembers}
                size={cartitem.size}
                user = {cartitem.user}
                />
            })}

        </div>
        : <div>No products in cart</div>  
      }
        </div>

    </div>
  
  )
}
