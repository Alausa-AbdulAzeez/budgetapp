import {
  Box,
  Tab,
  TabList,
  Image,
  TabPanels,
  TabPanel,
  Tabs,
} from '@chakra-ui/react'
import { NoBudgetCreated, NothingCreated } from '../assets/icons'

const MonthlyBudget = () => {
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

  return (
    <Box mt={'30px'}>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default MonthlyBudget
