import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '~/App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // dùng BrowserRouter để bộc lại con App
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
