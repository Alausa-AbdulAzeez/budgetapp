import { Image } from '@chakra-ui/react'
import {
  Budget,
  BudgetActive,
  Chat,
  ChatActive,
  Home,
  HomeActive,
  Profile,
  ProfileActive,
  Reports,
  ReportsActive,
} from '../assets/icons'

export const navData = [
  {
    title: 'Home',
    link: '/',
    icons: {
      active: <Image src={HomeActive} alt='HomeActive' />,
      inActive: <Image src={Home} alt='HomeActive' />,
    },
    id: 1,
  },
  {
    title: 'Reports',
    link: '/reports',
    icons: {
      active: <Image src={ReportsActive} alt='Reports' />,
      inActive: <Image src={Reports} alt='Reports' />,
    },
    id: 3,
  },
  {
    title: 'Chat',
    link: '/chat',
    icons: {
      active: <Image src={ChatActive} alt='Chat' />,
      inActive: <Image src={Chat} alt='Chat' />,
    },
    id: 4,
  },
  {
    title: 'Budget',
    link: '/budget',
    icons: {
      active: <Image src={BudgetActive} alt='Budget' />,
      inActive: <Image src={Budget} alt='Budget' />,
    },
    id: 5,
  },
  {
    title: 'Profile',
    link: '/profile',
    icons: {
      active: <Image src={ProfileActive} alt='Profile' />,
      inActive: <Image src={Profile} alt='Profile' />,
    },
    id: 6,
  },
]
