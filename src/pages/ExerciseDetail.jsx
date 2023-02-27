import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {fetchData, exerciseOptions, youtubeOptions} from '../utils/fetchData'
import Detail from '../components/ExerciseDetailComponents/Detail'
import ExerciseVideos from '../components/ExerciseDetailComponents/ExerciseVideos'



const ExerciseDetail = () => {
  
  const [loading, setLoading] = useState(false)
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    
    const fetchExercisesData = async () => {
      setLoading(true)
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      
      setexerciseDetail(exerciseDetailData)
      setExerciseVideos(exerciseVideosData.contents)

      setLoading(false)
    }
    fetchExercisesData();
  }, [id])
  
  return (
    <Box>
      {
        loading ? <p>Loading...</p> : <>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        </>
      }
      
    </Box>
  )
}

export default ExerciseDetail