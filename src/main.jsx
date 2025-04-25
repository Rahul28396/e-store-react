import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home/Home.jsx';
import TitleContextProvider from './context/TitleConetxt.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        index: true, 
        element: <Home />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleContextProvider>
      <RouterProvider router={router} />
    </TitleContextProvider>
  </StrictMode>,
)
