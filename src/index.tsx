import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Homework from './pages/Homework/Homework'

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ':homework',
        element: <Homework />
      },
      {
        path: '/error',
        element: <Error />
      }
    ]
  }
], {
  basename: '/'
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
