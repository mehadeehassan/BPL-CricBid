import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import PromoSignup from './components/PromoSignup'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <PromoSignup />
    <Footer />
    <ToastContainer />
  </StrictMode>,
)
