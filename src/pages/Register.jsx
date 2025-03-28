import React from 'react'
import { useState } from 'react';
import { FormControlLabel, FormControl, FormLabel,TextField, Button, Container, Typography , Radio, RadioGroup } from '@mui/material';
import "./Register.css"
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [input , setInput] = useState({
    name:"",
    phno:"",
    email:"",
    password:"",
    company:""
  })


  const handleSubmit = (e)=>{
       e.preventDefault();
       localStorage.setItem("user", JSON.stringify(input));
       alert("successfully registered!!!");
       navigate("/login");
      
  }


  return (
    <div className="register">
      
      <Container className="mainR">
        <Typography variant="h4" gutterBottom align="left">
          Create your PopX account
        </Typography>
        <form className='formclass' onSubmit={handleSubmit}>
            
      
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                name="name"
                value={input.name}
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
                label="Phone number"
                variant="outlined"
                name="phno"
                value={input.phno}
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

              <TextField
                fullWidth
                label="Company name"
                variant="outlined"
                name="company"
                value={input.name}
                onChange={(e)=>{
                  setInput({
                    ...input,
                    [e.target.name]:e.target.value
                  })
                }}
              />
            <FormControl component="fieldset" margin='normal'>
             <FormLabel component="legend" required> Are you an agency? </FormLabel>
             <RadioGroup
              row
              aria-label="Agency"
              name="agency"
             >
             <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
             />
             <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
            />

            </RadioGroup>
            </FormControl>
        

        

            
            
              <Button fullWidth variant="contained" color="primary" type="submit">
                Create Account
              </Button>

              
          
        </form>
    </Container>
    </div>
  )
}

export default Register
