import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Context_user from './context/Context_user.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context_user>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Context_user>
  </StrictMode>,
)
