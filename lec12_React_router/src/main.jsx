import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'

/*Method 1 */
const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"user/:userid",
        element: <User/>
      },
    ]
  }
])

/*Method 2 */
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}> 
//       <Route path='' element={<Home/>} /> 
//       <Route path='about' element={<About/>} /> 
//       <Route path='contact' element={<Contact/>} /> 
//       {/* <Route path='user/:userid' element={<User/>} />  */}
//     </Route> 
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
