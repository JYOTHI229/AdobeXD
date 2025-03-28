import React from 'react';
import "./Profile.css"
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Grid,
    TextField
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function Profile() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className='profile'>
        <Typography variant="h5" gutterBottom className='header'>
                Account Settings
        </Typography>
      
        <Box sx={{
            padding: 3
        }}>
            
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Box sx={{
                        position: 'relative'
                    }}>
                        <Avatar sx={{
                                width: 80,
                                height: 80
                            }}/>
                        <IconButton
                            color="primary"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0
                            }}>
                            <CameraAltIcon/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item>
                   
                    <Typography variant="h6">
                       {user.name}
                    </Typography>
                    <Typography variant="body2">
                       {user.email}
                    </Typography>
                </Grid>
            </Grid>
            </Box>
                <Typography className='biosection'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eum quos quam voluptate modi similique deserunt dolor, dolores amet sapiente tenetur hic esse sequi inventore cupiditate ipsum voluptatem blanditiis recusandae.
                </Typography>
                
           
      
        </div>
    );
}

export default Profile;