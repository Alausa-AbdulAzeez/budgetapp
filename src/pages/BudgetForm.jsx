import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Text,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Back, Done } from '../assets/icons'

const BudgetForm = () => {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState(1)
  const [budgetAmount, setBudgetAmount] = useState('')
  const [expenseCategories, setExpenseCategories] = useState([])

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1)
    } else {
      // Navigate to the homepage or any other route
      navigate('/')
    }
  }

  const handleBudgetAmountChange = (e) => {
    setBudgetAmount(e.target.value)
  }

  const handleExpenseCategoryAdd = (category, amount) => {
    setExpenseCategories((prevCategories) => [
      ...prevCategories,
      { category, amount },
    ])
  }

  // Render different content based on the current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Box
            px='30px'
            background='#FCFCFC'
            py='20px'
            h='100vh'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
          >
            <Box>
              <Box display='flex' justifyContent='space-between' mb='30px'>
                <Image src={Back} alt='Back' width='20px' height='15px' />
                <Text fontWeight='500' fontSize='16px' color='#001233'>
                  1/
                  <Text
                    as='span'
                    fontWeight='400'
                    fontSize='16px'
                    color='#707480'
                  >
                    3
                  </Text>
                </Text>
              </Box>
              <Text fontWeight='700' fontSize='28px' color='#001233' mb='16px'>
                Create new budget
              </Text>
              <Text color='#707480' fontSize='14px' fontWeight='400' mb='24px'>
                How much would you like to budget for this month?
              </Text>
              <Input
                type='number'
                value={budgetAmount}
                onChange={handleBudgetAmountChange}
                variant='flushed'
                placeholder='Amount (in ₦)'
                color='#A8AFBF'
                fontSize='14px'
                h='35px'
                borderBottom='1px solid #A8AFBF'
              />
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Text
                color='#67A2DC'
                fontSize='14px'
                fontWeight='400'
                mb='24px'
                textDecoration='underline'
                cursor='pointer'
                m='0'
              >
                Create from spending pattern
              </Text>
              <Button
                onClick={handleNext}
                variant='ghost'
                rightIcon={<Image src={Done} />}
                color='#0466C8'
              >
                Next
              </Button>
            </Box>
          </Box>
        )

      case 2:
        return (
          <Box>
            <p>2/3</p>
            <p>Create new budget</p>
            <FormControl>
              <FormLabel>
                How much would you like to spend on each category this month?
              </FormLabel>
              {/* Render your Chakra UI category selection components here */}
            </FormControl>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </Box>
        )

      case 3:
        return (
          <Box>
            <p>3/3</p>
            <p>Create new budget</p>
            <FormControl>
              <FormLabel>
                How much would you like to spend on each category this month?
              </FormLabel>
              {/* Render your Chakra UI category selection components here */}
            </FormControl>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </Box>
        )

      default:
        return null
    }
  }

  return (
    <Box>
      {renderStepContent()}
      {/* Render any common Chakra UI components or navigation elements here */}
    </Box>
  )
}

export default BudgetForm
