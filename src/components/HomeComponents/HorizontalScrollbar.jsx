import { Box } from '@mui/system'
import React from 'react'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {


  return (
    <Box className='parts-list' sx= {{display: {xs: 'none', sm: 'none', lg: 'inline-grid'}}}>
        {data.map((item) => (
            <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m= '0 40px'
            >
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        ))}

    </Box>

    
  )
  
}

export default HorizontalScrollbar