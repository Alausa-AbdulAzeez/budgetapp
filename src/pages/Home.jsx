import { Box, List, ListItem, Image, Text } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle'
import MonthlyBudget from '../components/MonthlyBudget'
import CategoryBreakdown from '../components/CategoryBreakdown'
import { Naira } from '../assets/icons'
import { useState } from 'react'

const Home = () => {
  // OVERLAY STATE
  const [overlayVisible, setOverlayVisible] = useState(false)

  // LIST STATE
  const [listVisible, setListVisible] = useState(false)

  // OVERVIEW TYPE STATE
  const [overviewType, setOverviewType] = useState('Expenses Overview')

  // FUNCTION TO HANDLE OVERLAY STATE TOGGLE
  const toggleOverlay = () => {
    setListVisible((prev) => !prev)
    setOverlayVisible((prev) => !prev)
  }
  // END OF FUNCTION TO HANDLE OVERLAY STATE TOGGLE

  // FUNCTION TO HANDLE OVERVIEWTYPE STATE CHANGE
  const changeOverviewType = (type) => {
    setOverviewType(type)
    setListVisible((prev) => !prev)
    setOverlayVisible((prev) => !prev)
  }
  // END OF FUNCTION TO HANDLE OVERVIEWTYPE STATE CHANGE

  return (
    <Box>
      <PageTitle />
      <Box position='relative'>
        {listVisible && (
          <List
            position='absolute'
            width='155px'
            borderRadius='5px'
            right='30px'
            bg='#fff'
            box-shadow='0px 5px 10px 2px rgba(0, 0, 0, 0.03)'
            zIndex='10'
            opacity='1'
            p='10px'
            spacing={2}
            top='50px'
          >
            <ListItem
              display='flex'
              alignItems='center'
              gap='10px'
              cursor='pointer'
              onClick={() => changeOverviewType('Expenses Overview')}
            >
              <Image src={Naira} alt='Currency' />
              <Text fontSize='12px' fontWeight='400'>
                Expenses Overview
              </Text>
            </ListItem>
            <ListItem
              display='flex'
              alignItems='center'
              gap='10px'
              onClick={() => changeOverviewType('Category Overview')}
            >
              <Image src={Naira} alt='Currency' />
              <Text fontSize='12px' fontWeight='400'>
                Category Overview
              </Text>
            </ListItem>
          </List>
        )}
        {overlayVisible && (
          <Box
            position='absolute'
            h='100%'
            top='0'
            left='0'
            w='100%'
            border-radius=' 5px'
            opacity='0.8'
            background='#FBFBFB'
            boxShadow='0px 4px 15px 2px rgba(0, 0, 0, 0.03)'
            backdropFilter='blur(125px)'
            zIndex='2'
            onClick={toggleOverlay}
          ></Box>
        )}
        <MonthlyBudget
          toggleOverlay={toggleOverlay}
          overviewType={overviewType}
        />
        <CategoryBreakdown />
      </Box>
    </Box>
  )
}

export default Home
