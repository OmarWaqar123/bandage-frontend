import React from 'react'
// import "../SASS/signupComponent.scss"
import "../SASS/loginComponent.scss"
import {TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useFormik} from "formik"
import signupSchema from '../Schemas/signupschema';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  username: "",
  email:"",
  password:"",
}


export default function SignupComponent() {

    const navigate = useNavigate()
    const [isrevealpwd, Setisrevealpwd] = React.useState(false)

    const {values,errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues : initialValues,
      validationSchema: signupSchema,
      onSubmit: (values,action) => {
        HandleRegister(action,values)
        
      }
    })

   async function HandleRegister(action,values) {
      //  console.log(values)
      const response = await fetch("/auth/signup",{
        method:"POST",
        body: JSON.stringify(values),
        headers: {"Content-Type":"application/json"}

       })
       if(response.ok === true){
        const res = await response.json()
        toast.success("Successfully Signed up!")
        navigate("/login")
       }

       if(response.ok === false){
             const res = await response.json() 
             if(res.error){            
             toast.error(res.error)}
       }
    }


  return (

    <div>
        <h1 className='logo'>Bandage</h1>
        <ToastContainer />


        <div className='login-comp'>
           <h2 className='login-head'>Sign up</h2>
           <p className='login-p'>Welcome to Bandage! Please create account</p>

           <div className='Inputs'>

           <TextField
            id="outlined-basic"
             label="Username"
             variant="outlined"
             type='text'
             name='username'
             onBlur={handleBlur}
             value={values.username}
             onChange={handleChange}
             className='text-field'
             inputProps={{style: {fontSize: 20}}} 
             InputLabelProps={{style: {fontSize: 16}}} 
             error={ touched.username && !!errors.username}
             helperText={touched.username && errors.username}
             />

            <TextField
            id="outlined-basic"
             label="Enter Email"
             variant="outlined"
             type='email'
             name='email'
             onBlur={handleBlur}
             value={values.email}
             onChange={handleChange}
             className='text-field'
             inputProps={{style: {fontSize: 20}}} 
             InputLabelProps={{style: {fontSize: 16}}} 
             error = {touched.email && !!errors.email}
             helperText={touched.email && errors.email}
             />

             <TextField
             id="outlined-basic"
             label="Password"
             autoComplete="current-password"
             className='text-field'
             onBlur={handleBlur}
             value={values.password}
             name='password'
             type={isrevealpwd ? "text" : "password" }
             onChange={handleChange}
             inputProps={{style: {fontSize: 20}}} 
             InputLabelProps={{style: {fontSize: 16}}}
             error={touched.password && !!errors.password }
             helperText={touched.password && errors.password}
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
            >Sign up</Button>

            <p className='new'>Already on Bandage ?  
            <Link className='create' to={"/login"}> Login</Link></p>
           </div>
        </div>
        
    </div>
  )
}
