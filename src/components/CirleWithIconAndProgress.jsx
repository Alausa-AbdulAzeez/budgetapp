import { CircularProgress, Box, Center, Image } from '@chakra-ui/react'

const CircleWithIconAndProgress = ({ percent, icon, color, title }) => {
  return (
    <Box position='relative' w='50px' h='50px'>
      <CircularProgress
        value={percent}
        color={color || 'gray'}
        thickness='5px'
        size='100%'
      />
      <Center
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <Box>
          <Image src={icon} alt={title} w='20px' h='20px' />
        </Box>
      </Center>
    </Box>
  )
}

export default CircleWithIconAndProgress
