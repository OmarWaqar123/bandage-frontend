import React from 'react'
import "../SASS/createproduct.scss"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {BiDollar} from "react-icons/bi"
import {useFormik} from "formik"
import createproductSchema from '../Schemas/createproductschema';
import Selectcategory from "../Components/helpers/Selectcategory"

import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { UserContext } from '../Contexts/Usercontext';
import { useContext } from 'react';

const initialValues = {
  productname: "",
  price:1,
  quantity:1,
  description:""

}

export default function() {
  const {UserInfo,Setuserinfo} = useContext(UserContext)
  const navigate = useNavigate()
   const [previewSource, Setpreviewsource] = React.useState()
  const [categorySelected,Setcategoryselected] = React.useState("Men")
  const [isfileimage,Setisfileimage] = React.useState(false)

  const {values,errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues : initialValues,
    validationSchema: createproductSchema,
    onSubmit: (values,action) => {
      HandleRegister(action,values)
      
    }
  })

  async function HandleRegister(action,values){
    if(!previewSource){
      toast.error("Image is required")
      return
    }
    Uploadimage(previewSource,values)
       
  }

  async function Uploadimage(base64EncodedImage,values) {
    try {
      
      const trying = {...values, owner : UserInfo.email, image: base64EncodedImage, category:categorySelected }

      // console.log(trying)
  
      const response = await fetch("/product/createproduct", {
        method: "POST",
        body:JSON.stringify(trying),
        headers: {"Content-Type":"application/json"},
        credentials: "include"
      })

      if(response.ok === true ){
        toast.success("Product is Created");
      setTimeout(() => {
        navigate("/");       
      }, 1000); // Adjust the delay as needed
  
      }

      if(response.ok === false) {
        const res = await response.json()
        if(res.error){
          toast.error(res.error)
        }
       }

      
      
    } catch (error) {
      console.log(error)
      
    }
  }

  function handlefileinput(e) {
      const file = e.target.files[0]
      if (file.type.startsWith('image/')) {
      Setisfileimage(false)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        Setpreviewsource(reader.result)
      }

      } else {
        Setisfileimage(true)
        toast.error("Only images are allowed")
      }
      
  } 

  


  

  return (
    <>
    <ToastContainer/>
    <div className='form-grand-dad'>
      
        <div className='form-dad'>
             <h2>Create Product</h2>
             {/* {previewSource && <img src={previewSource} />} */}
             <div className='inputs-dad'>
              {/* PRODUCT NAME */}
             <TextField 
             className='input' id="outlined-basic" label="Product Name" variant="outlined"
             name='productname'
             inputProps={{style: {fontSize: 20}}} 
             InputLabelProps={{style: {fontSize: 16}}}
             value={values.productname}
             onChange={handleChange}
             onBlur={handleBlur}
             error={ touched.productname && !!errors.productname}
             helperText={touched.productname && errors.productname && <span className="error-helper-text">{errors.productname}</span>
            }
             />

             {/* PRICE */}
             <TextField 
             className='input' id="outlined-basic" 
             type="number"
             name="price" label="Price" variant="outlined"
             inputProps={{
              style: {fontSize: 20}, 
            }} 
             InputLabelProps={{style: {fontSize: 17}}}
             InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <BiDollar size={40}/> {/* Dollar symbol as a suffix */}
                </InputAdornment>
              ),
            }}
            onBlur={handleBlur}
            value={values.price}
            onChange={handleChange}
            error={ touched.price && !!errors.price}
            helperText={touched.price && errors.price && <span className="error-helper-text">{errors.price}</span>}
             />

             {/* QUANTITY */}
         <TextField 
             className='input' id="outlined-basic" 
             type="number"
             name="quantity" label="Quantity" variant="outlined"
             inputProps={{
              style: {fontSize: 20}, 
            }} 
             InputLabelProps={{style: {fontSize: 17}}}
            onBlur={handleBlur}
            value={values.quantity}
            onChange={handleChange}
            error={ touched.quantity && !!errors.quantity}
            helperText={touched.quantity && errors.quantity && <span className="error-helper-text">{errors.quantity}</span>}
             />
            
            {/* CATEGORY */}

            <Selectcategory categorySelected={categorySelected} Setcategoryselected={Setcategoryselected}/>

            {/* UPLOAD IMAGE */}
            <div className='file-dad'>
            <input 
            type='file'
            className='file'
            // value={previewSource}
            accept='image/*'
            onChange={handlefileinput}
            />
            </div>

             {/* description */}
             <TextField
              className='input'
              id="outlined-multiline-static"
              label="Description"
              name='description'
              multiline
              rows={5}
              placeholder='Description'
              onBlur={handleBlur}
            value={values.description}
            onChange={handleChange}
            error={ touched.description && !!errors.description}
            helperText={touched.description && errors.description && <span className="error-helper-text">{errors.description}</span>}
            inputProps={{
              style: {fontSize: 20}, 
            }} 
             InputLabelProps={{style: {fontSize: 17}}}

             />

            <Button
            disabled={isfileimage}
             variant="contained"
             className='submit'
             onClick={handleSubmit}
            >Submit</Button>
 


             </div>
        </div>
    </div>
    </>
  )
}
