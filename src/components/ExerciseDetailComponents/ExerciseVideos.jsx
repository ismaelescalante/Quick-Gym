import React from 'react'
import {Box, Typography, Stack} from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box  mt='20px' display='flex' flexDirection='column' alignItems='center' padding='2rem'>
      <Typography  variant='h4' mb='20px' sx={{fontFamily: 'Dosis'}}>
        Watch {name} videos on Youtube
      </Typography>
      <Stack className='videos'  sx={{display:'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {exerciseVideos?.slice(0,6).map((item, index) => (
          <a key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            >
            <img src={item.video.thumbnails[0].url} alt="" />
            <Typography fontFamily='Dosis' fontWeight='500'>
              {item.video.title}
            </Typography>
          </a>
        ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos