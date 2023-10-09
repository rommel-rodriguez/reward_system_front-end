import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SignInPage from './components/pages/Authentication/SignInPage';
import SignupPage from './components/pages/Authentication/SignupPage';
import RegisterSalePage from './components/pages/Seller/RegisterSalePage';
import EmployeesAccordion from './components/standalone/EmployeesAccordion';
import TrackEmployeesPage from './components/pages/Manager/TrackEmployeesPage';
import { IdentityProvider } from './context/identity';
import ProfilePage from './components/pages/Profile/ProfilePage';
import RegisterNewCustomer from './components/pages/Seller/RegisterNewCustomer';
import PrivateRoute from './components/routes/PrivateRoute';
import HomePage from './components/pages/Home/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element:  <HomePage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/register-sale",
    element: <PrivateRoute> <RegisterSalePage /></PrivateRoute>,
  },
  {
    path: "/track-employees",
    element: <PrivateRoute> <TrackEmployeesPage/></PrivateRoute>,
  },
  {
    path: "/profile",
    element: <PrivateRoute> <ProfilePage /></PrivateRoute>,
  },
  {
    path: "/register-customer",
    element: <PrivateRoute><RegisterNewCustomer/></PrivateRoute> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <IdentityProvider>
      <RouterProvider router={router} />
    </IdentityProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
