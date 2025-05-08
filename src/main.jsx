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
import ProductListing from './pages/ProductListingPage/ProductListing.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import Cart from './pages/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        index: true, 
        element: <Home />,
        
      },
      {
        path: 'category/:category',
        element: <ProductListing />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
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
