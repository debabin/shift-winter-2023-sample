import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RootPage } from './pages/root';
import { ROUTES } from './utils/constants/router';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootPage />
  }
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
