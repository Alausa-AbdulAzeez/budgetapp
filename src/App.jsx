import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Reports from './pages/Reports'
import Chat from './pages/Chat'
import Budget from './pages/Budget'
import Profile from './pages/Profile'
import Home from './pages/Home'
import BudgetForm from './pages/BudgetForm'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='reports' element={<Reports />} />
        <Route path='chat' element={<Chat />} />
        <Route path='budget' element={<Budget />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='budgetForm' element={<BudgetForm />} />
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
