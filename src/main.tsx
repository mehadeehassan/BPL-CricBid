import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import PromoSignup from './components/PromoSignup'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <PromoSignup />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)