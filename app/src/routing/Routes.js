import {Suspense, lazy, useEffect} from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/DashboardLayout';
import SplashLayout from '../layouts/SplashLayout';
import SiteLayout from '../layouts/SiteLayout';
import AuthGuard from './AuthGuard';
import GuestGuard from './GuestGuard';

import LoadingScreen from './LoadingScreen';
// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};


export default function Router() {
  const location = useLocation();

  return useRoutes([
    {
      path: '/',
      element: <SiteLayout/>,
      children: [
        { element: <PageLanding/>, index: true },   
      ],
    },
    {
        path: 'app',
        element: <AuthGuard><DashboardLayout /></AuthGuard>,
        children: [
          { index: true, element: <PageDefault />  },
        ],
    },
    {
      path: 'auth',
      element: <GuestGuard><SiteLayout /></GuestGuard>,
      children: [
        { path: 'login', element: <PageLogin /> },
        { path: 'register', element: <PageCreateAccount /> },
      ],
    },
    {
      path: '*',
      element: <SiteLayout />,
      children: [
        { path: '404', element: <Page404 /> },

        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}


const PageDefault = Loadable(lazy(() => import('../pages/PageDefault')));

const PageCreateAccount = Loadable(lazy(() => import('../pages/PageCreateAccount')));
const PageLogin = Loadable(lazy(() => import('../pages/PageLogin')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));

const PageLanding = Loadable(lazy(() => import('../pages/PageLanding')));
