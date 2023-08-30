import React,{useContext} from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { CheckoutContext } from '../Contexts/Checkoutprod';
import "../SASS/checkoutcomp.scss"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartmembersContext } from '../Contexts/cartmembers';

export default function CheckoutComponent() {
  const{Productselected,Setproductselected} = useContext(CheckoutContext)
  const[address,Setaddress] = React.useState("")
  const[contact,Setcontact] = React.useState("")
  const {cartmembers,SetCartmembers} = useContext(CartmembersContext)

  const navigate = useNavigate()

  // console.log(Productselected)

  async function handlecheckout() {
    if(!address || !contact){
      toast.error("Please fill the fields")
      return
    }
   //we need to now make a request to sebmit order but the proper/complete product info is not here in productSelected , we need more product info specially productid
    const response = await fetch("/product/createorder",{
      method: "POST",
      body: JSON.stringify(Productselected),
      headers: { "Content-Type": "application/json" },
      credentials: 'include',

    })

    if(response.ok === true) {
      toast.success("Order Placed Successfully");
      Handledeletefromcart()
      setTimeout(() => {
        navigate("/");       
      }, 1000); // Adjust the delay as needed
    }
  }

  async function Handledeletefromcart() {
    try {
      
        const response = await fetch(`/product/deletefromcart/${Productselected.cartelementid}`,{
          method:"DELETE",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
    
        })
        if(response.ok === true) {
          const res = await response.json()
          SetCartmembers(res)
        }
    
      
    } catch (error) {
      console.log(error)
    }
  }

  return Productselected ? (
    <div className='check-out-dad'>
      <ToastContainer/>
      <div className='checkout'>
      <h2>Checkout</h2>
      <p className='productname'>{Productselected?.productname}</p>
      <p className='price'>Price:<span>{Productselected?.price}$</span></p>

      <TextField
      id="outlined-basic" label="Address" 
      className="inputs" variant="outlined" name='address'
      value={address} onChange={(e)=> Setaddress(e.target.value)}    
      inputProps={{style: {fontSize: 20}}} 
      InputLabelProps={{style: {fontSize: 16}}}
      />
      <TextField
      id="outlined-basic" label="Contact" className="inputs" variant="outlined" name='contact'
      type='number'    
      inputProps={{style: {fontSize: 20}}} 
      InputLabelProps={{style: {fontSize: 16}}}
      value={contact} onChange={(e) => Setcontact(e.target.value)}
      />
      <Button 
      variant="contained"
       className='buy'
       onClick={handlecheckout}
       >Buy</Button>


      </div>
    </div>
  ): <p>No product is selected</p>
}
