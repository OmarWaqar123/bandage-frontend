import React from 'react'
import "../SASS/loginComponent.scss"
import {TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import loginSchema from '../Schemas/loginSchema';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  email: "",
  password:""
}

export default function LoginComponent() {
  const [isrevealpwd, Setisrevealpwd] = React.useState(false)
   const navigate = useNavigate()
   
  const {values,errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues : initialValues,
    validationSchema: loginSchema,
    onSubmit: (values,action) => {
      // console.log(values)
      Handlelogin(action,values)
      
    }
  })

  async function Handlelogin(action,values) {
    const response = await fetch("/auth/login",{
      method:"POST",
      body: JSON.stringify(values),
      headers: {"Content-Type":"application/json"},
      credentials: "include"

     })
     if(response.ok === true){
      toast.success("Sign in Successfull");
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

  }

  return (
    <div>
        <h1 className='logo'>Bandage</h1>
        <ToastContainer/>
        <div className='login-comp'>
           <h2 className='login-head'>Sign in</h2>
           <p className='login-p'>Welcome to Bandage! Please Login</p>

           <div className='Inputs'>

            <TextField
            id="outlined-basic"
             label="Enter Email"
             variant="outlined"
             type='email'
             name='email'
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             className='text-field'
             inputProps={{style: {fontSize: 20}}} 
             InputLabelProps={{style: {fontSize: 16}}} 
             error={touched.email && !!errors.email}
             helperText={touched.email && errors.email}
             />
             <TextField
             id="outlined-basic"
             label="Password"
             name='password'
             value={values.password}
             onChange={handleChange}
             onBlur={handleBlur}
             autoComplete="current-password"
             type={isrevealpwd ? "text" : "password" }
             className='text-field'
             inputProps={{style: {fontSize: 20}}} 
             InputLabelProps={{style: {fontSize: 16}}}
             error={touched.password && !!errors.password}
             helperText={touched.password && errors.password }
             InputProps={{
              endAdornment: (
                  <InputAdornment position="end">
                  <IconButton
                    onClick={() => Setisrevealpwd(prev => !prev)}
                    edge="end"
                  >
                    {isrevealpwd ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}

             />
            

            <Button
             variant="contained"
             className='signin-btn'
             onClick={handleSubmit}
            >Sign in</Button>

            <p className='new'>New to Bandage ?  
            <Link className='create' to={"/signup"}> Create account</Link></p>
           </div>
        </div>
        
    </div>
  )
}
