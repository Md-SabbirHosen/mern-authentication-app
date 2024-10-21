import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        index: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
