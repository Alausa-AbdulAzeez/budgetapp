import { Box } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle'
import MonthlyBudget from '../components/MonthlyBudget'

const Home = () => {
  return (
    <Box>
      <PageTitle />
      <MonthlyBudget />
    </Box>
  )
}

export default Home
