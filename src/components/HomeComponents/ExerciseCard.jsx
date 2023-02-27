import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Stack className='exercise-card'
    >
        <img 
        src={exercise.gifUrl} 
        alt={exercise.name} 
        loading='lazy'
        width='200px' />
        <Stack width='100%'  mb='10px' sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-around'}}>
            <Button variant='contained' color='warning' style={{ borderRadius: '20px', fontFamily: 'Dosis', fontWeight: 'bold', fontSize: '12px', height: '40px'}}>
                {exercise.bodyPart}
            </Button>
            <Button variant='contained' color='warning' style={{ borderRadius: '20px', fontFamily: 'Dosis', fontWeight: 'bold', fontSize: '12px', height: '40px'}}>
                {exercise.target}
            </Button>
        </Stack> 
        <Link to={`./exercise/${exercise.id}`} className='exercise-card-link'> 
        <Typography sx={{fontFamily:'Dosis', fontWeight: '600'}}>
            {exercise.name.toUpperCase()}
        </Typography>
    </Link>
        
    </Stack>
  )
}

export default ExerciseCard