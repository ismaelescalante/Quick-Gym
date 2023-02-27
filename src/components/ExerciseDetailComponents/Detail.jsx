import React from 'react'
import { Typography, Stack, List, ListItem } from '@mui/material'

const Detail = ({exerciseDetail}) => {

  const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  return (
    <Stack sx={{display: 'flex', flexDirection: {lg: 'row', sm: 'column', xs: 'column'}, justifyContent: 'space-around', padding: '2rem'}}>
      <img src={gifUrl} alt='A gif of the exercise'/>
    
    <Stack>
    <Typography variant='h5' className='exercise-description-name' sx={{fontFamily: 'Dosis', fontWeight: 500}}>
      {name}
    </Typography>
    <Typography mt='20px' className='exercise-description' sx={{fontFamily: 'Dosis', fontSize: '18px'}}>
      {name} is a great exercise if you want to target and work your {target}. <br/>Be sure to do it properly and don't get injured.
      
    </Typography>
    <List sx={{mt:'20px', ml:'none'}}>
        <ListItem>Body Part: {bodyPart}</ListItem>
        <ListItem>Target Muscle: {target}</ListItem>
        <ListItem>Necessary Equipment: {equipment}</ListItem>
      </List>
    </Stack>

    </Stack>
  )
}

export default Detail