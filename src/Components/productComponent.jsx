import React, { useEffect } from 'react'
import { Select } from 'antd';
import { useParams } from 'react-router-dom'
import "../SASS/oneproduct.scss"
import Button from '@mui/material/Button';
import {BsCartDashFill} from "react-icons/bs"
import Loader from "./helpers/Loader"
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Contexts/Usercontext';
import {CartmembersContext} from "../Contexts/cartmembers"
import { useContext } from 'react';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ProductComponent() {
  const {UserInfo,Setuserinfo} = useContext(UserContext)
  const {cartmembers,SetCartmembers} = useContext(CartmembersContext)
  

  const [categorySelected,Setcategoryselected] = React.useState("Medium")

  const [Oneproduct, Setoneproduct] = React.useState(null)
  const {id} = useParams()


  async function Addingtocart() {
    if (!UserInfo){
      toast.error("Login first!")
      return
    }
    try {
     
      const obj = {...Oneproduct, user:UserInfo.email, size:categorySelected}
      // console.log(obj)

      const response = await fetch("/product/addtocart",{
        method:"POST",
        body:JSON.stringify(obj),
        credentials: 'include',
        headers: { "Content-Type": "application/json" },

      })

      if(response.ok === true) {
        const res = await response.json()
        toast.success("Product added to cart")
        Fetchingcartmembers()
      }
      if(response.ok === false) {
        toast.error("Adding to cart failed")
      }
    } catch (error) {
      console.log(error)
    }
  }


  async function Fetchingcartmembers() {

    try {
      const response = await fetch("/product/cartmembers",{
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

  useEffect(()=>{
    handlefetch()
  },[])

  async function handlefetch() {
    try {
      const response = await fetch(`/product/getoneproduct/${id}`, {
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
        });

        if(response.ok === true){
          const res = await response.json()
          Setoneproduct(res)
        }
      
    } catch (error) {
      console.log(error)
    }
  }
   
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    Setcategoryselected(value)
  };
  return  Oneproduct ? (
    <div className='one-granddad'>
      <ToastContainer/>
      <div className='one-dad'>
      <div className='img-dad'>
        <img
        src={Oneproduct.image}
        />

      </div>
      <div className="info">
        <h3>{Oneproduct.productname}</h3>
        <p className='price'>Price: <span>{Oneproduct.price}$</span></p>
        <p className='category'>Category: <span>{Oneproduct.category}</span></p>
        <p className='size-label'>Size:</p>
        <Select
      defaultValue="Medium"
      className='size'
      onChange={handleChange}
      options={[
        {
          value: "Small",
          label: 'Small',
        },
        {
          value: 'Medium',
          label: 'Medium',
        },
        {
          value: 'Large',
          label: 'Large',
        },

      ]}
    />

    <p className='desc-label'>Description:</p>
    <p className='desc'>{Oneproduct.description}</p>
    <Button variant="contained" className='cart' onClick={Addingtocart}>
      <BsCartDashFill className='icon'/> Add to Cart</Button>

      </div>
      </div>
    </div>
  ) : <Loader/>
}
