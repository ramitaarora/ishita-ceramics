import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from './Error.jsx'

const router = createBrowserRouter([
  {
    path: "/ishita-ceramics",
    element: <App />,
  },
  {
    path: "*",
    element: <Error />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
