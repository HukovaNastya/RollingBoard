import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from '../src/pages/HomePage/HomePage';
import ErrorPage from '../src/pages/ErrorPage/ErrorPage';
import SignUpPage from '../src/pages/SignUpPage/SignUpPage';
import LogInPage from '../src/pages/LogInPage/LogInPage';

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "sign-in",
    element: <SignUpPage/>,
  },
  {
    path: "log-in",
    element: <LogInPage/>,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}
