import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import { routerProvider } from './router'

import './assets/styles/globals.scss'


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routerProvider} />
)
