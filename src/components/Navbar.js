import React from 'react'

// Link Component
import { Link } from 'react-router-dom';

// Stack from MaterialUI allows you to manage layout of immediate children along hroizontal and vertical axis.
import { Typography, Stack } from '@mui/material';

import Logo from '../assets/assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent = "space-around" sx ={{gap:{
        sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'    
    }}>
        <Link to ="/">
            <img src={Logo} alt="logo" 
            style={{
                width: '48px', height: '48px', margin: '0 20px'
            }}  />
        </Link>
        
        <Stack direction="row" gap="40px" fontSize="20px" alignItems="flex-end">

            <Link to ="/" style = {{
                textDecoration:"none", color: "#3A1212", borderBottom: "3px sol #FF2625"
            }}>
                Home
            </Link>

            <a href='#exercises' style = {{
                textDecoration: "none", color: "#3A1212"
            }}>
                Exercises
            </a>
        </Stack>
    </Stack>
  )
}

export default Navbar