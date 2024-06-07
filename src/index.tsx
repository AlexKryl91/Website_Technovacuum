import { createRoot } from 'react-dom/client';
import App from '@/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAboutUs } from '@/pages/AboutUs/AboutUs.lazy';
import { LazyContacts } from '@/pages/Contacts/Contacts.lazy';
import { Suspense } from 'react';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/about',
    element: (
      <Suspense fallback={'Loading...'}>
        <LazyAboutUs />
      </Suspense>
    ),
  },
  {
    path: '/shop',
    element: (
      <Suspense fallback={'Loading...'}>
        <LazyContacts />
      </Suspense>
    ),
  },
]);

container.render(<RouterProvider router={router} />);
