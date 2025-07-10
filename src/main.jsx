import { StrictMode } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

//Import Pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Doubts from './Pages/Doubts/Doubts'

//Import Contexts
import { ScrollProvider } from './Contexts/ScrollContext'

//Import CSS
import './global.scss'

// Import de fontes
import '@fontsource/host-grotesk/300.css'
import '@fontsource/host-grotesk/400.css'
import '@fontsource/host-grotesk/700.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "/duvidas",
    element: <Doubts />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollProvider>
      <RouterProvider router={router} />
    </ScrollProvider>
  </StrictMode>
)
