import {
  Box,
  Tab,
  TabList,
  Image,
  TabPanels,
  TabPanel,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { NoBudgetCreated, ThreeDots } from '../assets/icons'

const MonthlyBudget = ({ toggleOverlay }) => {
  // CUSTOM STYLES
  const tabStyles = {
    color: '#0466C8',
    ':after': {
      content: '""',
      height: '2px',
      position: 'absolute',
      width: '40px',
      background: '#0466C8',
      bottom: '-2px',
      left: '15px',
    },
  }

  // END OF CUSTOM STYLES

  return (
    <Box mt={'30px'} px='30px' position='relative'>
      <Image
        src={ThreeDots}
        alt='more'
        position='absolute'
        top='8px'
        right='30px'
        cursor='pointer'
        onClick={() => toggleOverlay()}
        zIndex={3}
      />
      <Tabs>
        <TabList border={'0px'} mb={'30px'}>
          <Tab position={'relative'} _selected={{ ...tabStyles }}>
            Last Month
          </Tab>
          <Tab position={'relative'} _selected={{ ...tabStyles }}>
            This Month
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            padding={'0px'}
          >
            <Image
              src={NoBudgetCreated}
              alt='Empty'
              w={'150px'}
              height={'150px'}
            />
            <Text w={'60%'} textAlign={'center'} mt={'21px'} color={'#707480'}>
              No budget created for last month.
            </Text>
          </TabPanel>
          <TabPanel
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            padding={'0px'}
          >
            <Image
              src={NoBudgetCreated}
              alt='Empty'
              w={'150px'}
              height={'150px'}
            />
            <Text w={'60%'} textAlign={'center'} mt={'21px'} color={'#707480'}>
              You haven’t created a budget for this month yet
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default MonthlyBudget
