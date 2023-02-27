import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../../images/icon.png'



const Navbar = () => {
  return (
    <Stack direction='row'
    px='15px'
    sx={{gap: {sm: '122px', xs: '40px'}, mt:{sm: '32px', xs: '20px'}, justifyContent: 'none'}}>
      <Link to='/' style={{marginBottom:'25px'}}>
        <img src={Logo} alt="logo" style={{ width: '60px', height: '60px', margin: '0 20px'}} />
      </Link>
      <Stack direction='row'
      gap='40px'
      fontSize='24px'
      alignItems='flex-start'
      mt= '7px'
      >
        <Link to='/'style={{textDecoration: 'none', color: 'black', borderBottom: '3px solid #FE7320'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: 'black', borderBottom: '3px solid #FE7320'}}>Exercises</a>
      </Stack>
      
    </Stack>
    
  )
}

export default Navbar