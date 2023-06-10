import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from '../src/pages/HomePage/HomePage';
import ErrorPage from '../src/pages/ErrorPage/ErrorPage';

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  // {
  //   // TODO rename listOfTodoFromApi => todos
  //   path: "todos",
  //   element: <TodosPage/>,
  // },
  // {
  //   // TODO rename "todo/:todoId" => todos/:todoId
  //   path: "todo/:todoId",
  //   element: <ToDoPage/>,
  //   loader: getTodos,
  // },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}
