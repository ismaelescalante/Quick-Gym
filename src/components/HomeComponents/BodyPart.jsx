import React from 'react'
import {Stack, Typography} from '@mui/material'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack className='body-part' border='2px solid orangered' borderRadius='10px'
    onClick= {() => {
        setBodyPart(item)
        window.scrollTo({top: 1100, behavior: 'smooth'})
    }}
    type='button'
    justifyContent='center'
    alignItems='center'
    width= '100%'
    height= '70px' 
    margin=' 40px 10px'
    sx={{ cursor: 'pointer'}}>
        {/* <img src={Icon} alt="Icon" width='100px'/> */}
    <Typography fontFamily='Dosis' fontWeight='600'>
        {item.toUpperCase()}
    </Typography>
    </Stack>
  )
}

export default BodyPart