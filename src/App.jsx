import{createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Home} from './pagees/Home'
import {Contact} from './pagees/Contact'
import {Country} from './pagees/Country'
import {About} from './pagees/About'
import {Error} from './pagees/Error'
import AppLayout from './components/layout/AppLayout'
import { CountryDetails } from './components/layout/CountryDetails'

function App() {
 
const router=createBrowserRouter([
  {
      path:'/',
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: 'about',
          element: <About/>,
        },
        {
          path: 'contact',
          element: <Contact/>,
        },
        {
          path: 'country',
          element: <Country/>,
        },{
          path: 'country/:id',
          element: <CountryDetails/>,
        },
      ]
  },
  
  
])
  return (
    <>
     <RouterProvider router={router} />
    
    </>
  )
}

export default App
