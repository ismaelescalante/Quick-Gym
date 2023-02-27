import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import {Pagination} from '@mui/material'

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises && exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate =  (e, value) => {
    setCurrentPage(value);

    window.scrollTo({top: 900, behavior: 'smooth'})
  }

  useEffect( () => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart==='all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
       exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart] )

  return (
    <Box 
    p='2rem'
    id='exercises' 
    sx={{display:'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
      <Typography variant='h3' fontFamily='Dosis' mb='20px'>
        Exercises
      </Typography>
      <Stack sx={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='50px'>
          {exercises.length > 9 && (
          <Pagination 
            color='warning'
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
          />

        )}
      </Stack>
    </Box>
  )
}

export default Exercises