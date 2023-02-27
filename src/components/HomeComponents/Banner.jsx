import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import fitnessImg from '../../images/fitness.jpg'


const Banner = () => {
  return (
    <>
    
    <Box 
    display='flex'
    alignItems='center'
    position='relative' 
    p= '20px'
    width= {{lg: '1200px', sm:'580px'}}
    sx={{
      mt: {lg: '20px', sm: '15px'}, 
      ml: {sm: '50px'},
    }} >
      <div>
      <Typography fontFamily='Dosis' fontWeight='600'  sx={{ fontSize: {lg: '38px', sm: '32px'}, justifyContent: {sm: 'center'}}}>
        YOUR GYM, WHEREVER YOU WANT
      </Typography>
      <Typography fontFamily='Dosis' p='10px' fontWeight='500' sx= {{fontSize: {lg: '26px', sm: '26px'}}}>
        No matter where you are, it's time to get fit
      </Typography>
      <Typography fontFamily='Dosis' p='10px' sx= {{ display: 'flex', flexDirection: 'column', justifyContent:'flex-start', fontSize: {lg: '24px', sm: '20px'}}}>
       Get the best exercises now
       
      </Typography>
      <Button href='#exercises' variant='contained' color='warning' style={{ fontFamily: 'Dosis', fontWeight: 'bold', marginLeft: '10px'}}>Explore Exercises</Button>
      </div>
      <div>
      <img src={fitnessImg}  className='fitness-img' alt='A girl doing sit-ups' />
      </div>
    </Box>



</>
    
  )
}

export default Banner