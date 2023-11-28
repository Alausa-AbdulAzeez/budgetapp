import React from 'react'
import { CircularProgress, Box, Text } from '@chakra-ui/react'

const CircleWithPercent = ({ percent }) => {
  return (
    <Box position='relative' w='100px' h='100px'>
      <CircularProgress
        value={percent}
        color='teal'
        thickness='10px'
        size='100%'
      />
      <Text
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        fontSize='xl'
        fontWeight='bold'
        color='teal'
      >
        {`${percent}%`}
      </Text>
    </Box>
  )
}

export default CircleWithPercent
