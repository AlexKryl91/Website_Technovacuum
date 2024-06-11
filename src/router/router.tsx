import App from '@/components/App';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Homepage from '@/pages/Homepage/Homepage';
import { Suspense } from 'react';
import { LazySolutions } from '@/pages/Solutions/Solutions.lazy';
import { LazyProductsAndServices } from '@/pages/ProductsAndServices/ProductsAndServices.lazy';
import { LazyAboutUs } from '@/pages/AboutUs/AboutUs.lazy';
import { LazyCareers } from '@/pages/Careers/Careers.lazy';
import { LazyContacts } from '@/pages/Contacts/Contacts.lazy';
import { LazyImplementations } from '@/pages/Implementations/Implementations.lazy';
import { LazyOurTeam } from '@/pages/OurTeam/OurTeam.lazy';
import { LazyPublications } from '@/pages/Publications/Publications.lazy';

const loader = [];

const subPages = [
  { path: '/solutions', element: <LazySolutions /> },
  { path: '/products&services', element: <LazyProductsAndServices /> },
  { path: '/about', element: <LazyAboutUs /> },
  { path: '/implementations', element: <LazyImplementations /> },
  { path: '/team', element: <LazyOurTeam /> },
  { path: '/publications', element: <LazyPublications /> },
  { path: '/contacts', element: <LazyContacts /> },
  { path: '/careers', element: <LazyCareers /> },
];

const homePage = { path: '/', element: <Homepage /> };

subPages.forEach(
  (page) =>
    (page.element = <Suspense fallback={'Loading...'}>{page.element}</Suspense>)
);

subPages.push(homePage);

// export const publicRoutes = [
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: '/', element: <Homepage /> },
//       {
//         path: '/solutions',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazySolutions />
//           </Suspense>
//         ),
//       },
//       {
//         path: '/products&services',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazyProductsAndServices />
//           </Suspense>
//         ),
//       },
//       {
//         path: '/about',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazyAboutUs />
//           </Suspense>
//         ),
//       },
//       {
//         path: '/implementations',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazyImplementations />
//           </Suspense>
//         ),
//       },
//       {
//         path: '/team',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazyOurTeam />
//           </Suspense>
//         ),
//       },
//       {
//         path: '/publications',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazyPublications />
//           </Suspense>
//         ),
//       },
//       {
//         path: '/contacts',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazyContacts />
//           </Suspense>
//         ),
//       },
//       {
//         path: '/careers',
//         element: (
//           <Suspense fallback={'Loading...'}>
//             <LazyCareers />
//           </Suspense>
//         ),
//       },
//     ],
//   },
// ];

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: subPages,
  },
];
