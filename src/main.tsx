import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Toaster} from 'react-hot-toast';
import {BrowserRouter} from 'react-router-dom'
import {App} from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/auth-context.tsx'
import {CostumerProvider} from './contexts/costumer-context.tsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CostumerProvider>
            <App/>
          </CostumerProvider>
        </AuthProvider>
        <Toaster/>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
