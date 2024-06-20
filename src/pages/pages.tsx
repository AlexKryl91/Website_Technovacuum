import { Suspense } from 'react';
import { LazySolutions } from '@/pages/Solutions/Solutions.lazy';
import { LazyProductsAndServices } from '@/pages/ProductsAndServices/ProductsAndServices.lazy';
import { LazyAboutUs } from '@/pages/AboutUs/AboutUs.lazy';
import { LazyCareers } from '@/pages/Careers/Careers.lazy';
import { LazyContacts } from '@/pages/Contacts/Contacts.lazy';
import { LazyImplementations } from '@/pages/Implementations/Implementations.lazy';
import { LazyOurTeam } from '@/pages/OurTeam/OurTeam.lazy';
import { LazyPublications } from '@/pages/Publications/Publications.lazy';
import { LazyHomepage } from '@/pages/Homepage/Homepage.lazy';
import Loader from '@/components/Loader/Loader';

const pages = [
  { path: '/', element: <LazyHomepage /> },
  { path: '/solutions', element: <LazySolutions /> },
  { path: '/products&services', element: <LazyProductsAndServices /> },
  { path: '/about', element: <LazyAboutUs /> },
  { path: '/implementations', element: <LazyImplementations /> },
  { path: '/team', element: <LazyOurTeam /> },
  { path: '/publications', element: <LazyPublications /> },
  { path: '/contacts', element: <LazyContacts /> },
  { path: '/careers', element: <LazyCareers /> },
];

pages.forEach(
  (page) =>
    (page.element = <Suspense fallback={<Loader />}>{page.element}</Suspense>)
);

export const publicPages = pages;
