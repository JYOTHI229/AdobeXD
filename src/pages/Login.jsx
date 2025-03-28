import React from 'react'
import { useState } from 'react';
import {TextField, Button, Container, Typography } from '@mui/material';
import "./Login.css";
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [input , setInput] = useState({
      email:"",
      password:"",
    })


   



   const handleLogin =(e)=>{
      e.preventDefault();
      const LoggedUser = JSON.parse(localStorage.getItem("user"));
      if(input.email === LoggedUser.email && input.password === LoggedUser.password){
        alert("Sign in succcessfully");
        localStorage.setItem("loggedIn",true);
        navigate("/profile");
      }
      else{
        alert("Invalid Credentials");
      }
   }

  return (
    <div className="Login">
      <Container className="mainL">
        <Typography variant="h4" gutterBottom align="left">
          Signin to your PopX account
        </Typography>
        <form className='formclass' onSubmit={handleLogin}>
            
            <TextField
                fullWidth
                label="Email address"
                variant="outlined"
                name="email"
                type="email"
                value={input.email}
                onChange={(e)=>{
                  setInput({
                    ...input,
                    [e.target.name]:e.target.value
                  })
                }}
                required
              />
           

           
           
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={input.password}
                onChange={(e)=>{
                  setInput({
                    ...input,
                    [e.target.name]:e.target.value
                  })
                }}
                required
              />
              <Button fullWidth variant="contained" color="primary" type="submit">
                 Login
              </Button> 
         
            
             
          
        </form>
    </Container>
    </div>
  )
}

export default Login
