import { lazy } from 'react';

export const LazyProductsAndServices = lazy(
  () => import('./ProductsAndServices')
);
