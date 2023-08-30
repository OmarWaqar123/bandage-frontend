import React,{useContext} from 'react'
import "../SASS/cartelement.scss"
import Button from '@mui/material/Button';
import {useNavigate, Navigate} from "react-router-dom"
// import { checkoutproductContext } from '../Contexts/checkoutproduct';
import {CheckoutContext} from "../Contexts/Checkoutprod"


export default function Cartelements({category,productname,price,image,productid,cartelementid,SetCartmembers,size,user}) {
  const navigate = useNavigate()

  const{Productselected,Setproductselected} = useContext(CheckoutContext)
  const [check,Setcheck]= React.useState(null)

async function handledeletecartitem() {
  try {
    const response = await fetch(`/product/deletefromcart/${cartelementid}`,{
      method:"DELETE",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },

    })

    if(response.ok === true){
      const res = await response.json()
      SetCartmembers(res)
      // console.log(res)

    }
  } catch (error) {
    console.log(error)
  }
}

// function Handletocheckout() {
//   const obj = {productname,price,category}
//   Setcheck(obj);
//   navigate("/checkout")
// }


  return (
    <div className='product-des'>
      <div className='img-dad'>
        <img src={image}/>
      </div>
      <p className='product-name' onClick={() => navigate(`/product/${productid}`)}>{productname}</p>
      <p className='price'>{price}$</p>
      <p className='category'>{category}</p>
      <Button
       variant="contained"
       className='checkout'
       onClick={()=> {
        Setproductselected({productname,price,category,productid,size,user,cartelementid})
        navigate("/checkout")
       }
      }
       >CheckOut</Button>
      <Button 
      variant="contained"
      className='remove'
      onClick={handledeletecartitem}
      >Remove</Button>

    </div>
  )
}
