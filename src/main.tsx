import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/auth-context.tsx'
import {CostumerProvider} from './contexts/costumer-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CostumerProvider>
          <App/>
        </CostumerProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
