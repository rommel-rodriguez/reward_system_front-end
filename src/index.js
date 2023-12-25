import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
// import App from './App';
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
import ModalPage from './components/pages/ModalTest/ModalPage';
import { IdentityProvider } from './context/identity';
import ProfilePage from './components/pages/Profile/ProfilePage';
import RegisterNewCustomer from './components/pages/Seller/RegisterNewCustomer';
import PrivateRoute from './components/routes/PrivateRoute';
import HomePage from './components/pages/Home/HomePage';
import SaleDetailShow from './components/SaleDetailList/SaleDetailShow';
import SaleDetailTable from './components/SaleDetailList/SaleDetailTable';
import SaleDetailShowPoly from './components/SaleDetailList/SaleDetailShowPoly';
import { SalesProvider } from './context/sales';
import { store } from './store'; 
import { Provider } from 'react-redux';
import Base from './components/common/Base/Base';

import config from './config/config';

const ROOT_PATH = config.rootPath;

console.log(`Root path set to ${ROOT_PATH}`)

const createRouter = config.environ === 'production' ?
              createHashRouter:
              createBrowserRouter;

const router = createRouter([
  {
    path: ROOT_PATH,
    element: <Base />,
    children: [
      {
        // path: "home",
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignupPage/>,
      },
      // {
      //   path: "/test",
      //   element: <SaleDetailTable></SaleDetailTable>,
      // },
      // {
      //   path: "/test",
      //   element: <SaleDetailShowPoly></SaleDetailShowPoly>,
      // },
      {
        path: "register-sale",
        element: <PrivateRoute> <SalesProvider> <RegisterSalePage /> </SalesProvider> </PrivateRoute>,
      },
      {
        path: "track-employees",
        element: <PrivateRoute> <TrackEmployeesPage/></PrivateRoute>,
      },
      {
        path: "profile",
        element: <PrivateRoute> <ProfilePage /></PrivateRoute>,
      },
      {
        path: "register-customer",
        element: <PrivateRoute><RegisterNewCustomer/></PrivateRoute> ,
      },
    ],
  },
  {
    path: "/modal",
    element: <ModalPage></ModalPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <IdentityProvider>
        <RouterProvider router={router} />
      </IdentityProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
