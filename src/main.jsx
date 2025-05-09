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
import Checkout from './pages/Checkout/Checkout.jsx';
import CartItemList from './components/CartItemList/CartItemList.jsx';
import AddressList from './components/AddressList/AddressList.jsx';
import Payment from './components/Payment/Payment.jsx';

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
        path: 'checkout',
        element: <Checkout />,
        children: [
          {
            path: '',
            element: <CartItemList />
          },
          {
            path: 'address',
            element: <AddressList />
          },
          {
            path: 'payment',
            element: <Payment />
          }
        ]
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
