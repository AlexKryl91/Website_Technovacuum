import App from '@/components/App';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import { publicPages } from '@/pages/pages';

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: publicPages,
  },
];
