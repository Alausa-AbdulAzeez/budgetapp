import { Box, Text, Image } from '@chakra-ui/react'
import { AddIcon, Naira } from '../assets/icons'

const PageTitle = () => {
  const boxStyles = {
    borderRadius: '10px',
    background: '#FFF',
    height: '51px',
    padding: '11px',
    width: '100%',
    boxShadow: '0px 5px 10px 2px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  return (
    <Box mt={'20px'} display={'flex'} flexDirection={'column'} gap={'28px'}>
      <Text
        fontSize={'28px'}
        color={'#001233'}
        fontWeight={'700'}
        letterSpacing={'-1.4px'}
      >
        Budget
      </Text>

      <Box display={'flex'} gap={'10px'} flexDirection={'column'}>
        <Box display={'flex'} gap={'10px'}>
          <Image src={Naira} alt='Currency' />
          <Text color={'#707480'} fontSize={'14px'} fontWeight={'400'}>
            Monthly Budget
          </Text>
        </Box>
        <Box sx={boxStyles}>
          <Text color={'#001233'} fontSize={'16px'} fontWeight={'400'}>
            Create a budget
          </Text>
          <Image src={AddIcon} alt='Add' />
        </Box>
      </Box>
    </Box>
  )
}

export default PageTitle
