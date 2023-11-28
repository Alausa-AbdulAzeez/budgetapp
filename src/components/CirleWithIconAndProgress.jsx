import React from 'react'
import { CircularProgress, Box, Center, Text } from '@chakra-ui/react'

const CircleWithIconAndProgress = ({ percent, icon }) => {
  return (
    <Box position='relative' w='100px' h='100px'>
      <CircularProgress
        value={percent}
        color='blue'
        thickness='10px'
        size='100%'
      />
      <Center
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <Text fontSize='2xl' color='blue'>
          {icon}
        </Text>
      </Center>
    </Box>
  )
}

export default CircleWithIconAndProgress
