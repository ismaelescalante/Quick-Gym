import React, {useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../components/HomeComponents/Exercises'
import SearchExercises from '../components/HomeComponents/SearchExercises'
import Banner from '../components/HomeComponents/Banner'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <Banner />
      <SearchExercises setExercises={setExercises}
      bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises}
      bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home