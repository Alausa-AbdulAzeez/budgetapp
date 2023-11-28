import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <Flex
      direction={'column'}
      position={'relative'}
      px={'30px'}
      bg={'#FCFCFC'}
      h={'100vh'}
    >
      <Outlet />
      <Navbar />
    </Flex>
  )
}

export default RootLayout
