import { RouterProvider } from 'react-router'
import './styles/global.css'
import { router } from './router'

const App = () => {
  return <RouterProvider router={router} />
}

export default App
