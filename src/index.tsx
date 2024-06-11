import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './router/router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter(publicRoutes);

container.render(<RouterProvider router={router} />);
