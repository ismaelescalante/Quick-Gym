import React, {useState, useEffect} from 'react'
import {Stack, Box, Typography, TextField, Button} from '@mui/material'
import {exerciseOptions, fetchData} from '../../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect (() => {
    const fecthExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])

      
    }

    fecthExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('')
      setExercises(searchedExercises)
    }
}



  return (
    <Stack
    alignItems='center'
    justifyContent='center'
    mt='45px'>
      <Typography mb='20px' sx={{fontFamily: 'Dosis', fontSize: '26px'}}>
        Search your exercise
      </Typography>
      <Box mb='40px'>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
          window.scrollTo({top: 1100, behavior: 'smooth'})}}>
        <TextField 
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        
        size='small' color='warning' sx={{
          width: {lg:'1000px', sm: '400px'},
          height: '70px',
          input: {
            border: 'none', 
            borderRadius: '4px', 
            fontFamily: 'Dosis',
            fontWeight: '500',
            fontSize: '22px'}}}/>

            <Button  
            type='submit'
            onClick={() => {
              handleSearch();
              window.scrollTo({top: 1100, behavior: 'smooth'})}}
            variant='contained' 
            color='warning' 
            position='absolute' 
            style=
            {{ fontFamily: 'Dosis', 
            fontWeight: 'bold',
            height: '48px'}}>
              Search
            </Button>
            </form>
      </Box>
      <Box>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises