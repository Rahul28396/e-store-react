import React from 'react';
import { render, screen } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';

const DummyChild = () => <div data-testid="outlet">Outlet Content</div>; // Replace with your actual child if needed

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <DummyChild />
      }
    ]
  }
]);

test('renders the Outlet component', async () => {
  render(<RouterProvider router={router} />);
  const outletElement = await screen.findByTestId('outlet');
  expect(outletElement).toBeInTheDocument();
});
