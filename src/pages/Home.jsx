import React from 'react'
import { Link } from 'react-router-dom';
import { Button , Container , Typography} from '@mui/material';
import './Home.css'

function Home() {
  return (
    <div className='home' >
      <div className='space'></div>
      <Container className="mainH">

        <Typography variant="h4" gutterBottom align="left">
          Welcome to PopX
        </Typography>
        
        
        <Button fullWidth variant="contained" color="primary" type="submit" component={Link} to="/register">
                Create Account

        </Button>
      
        
       
        <Button fullWidth variant="outlined" component={Link} to="/login" color='blue'>
                Already Registered? Login
        </Button>
     
     

      </Container>
    </div>
  )
}

export default Home
