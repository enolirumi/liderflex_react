import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

//Import CSS
import './global.scss'

// Import de fontes
import '@fontsource/host-grotesk/300.css'
import '@fontsource/host-grotesk/400.css'
import '@fontsource/host-grotesk/700.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
