import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllToDoPage from "./pages/AllToDoPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./pages/RootLayout";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./pages/PrivateRoute";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/allTodos",
        element: <AllToDoPage />,
      },
      {
        path: "/todo/:todoId",
        element: <DetailPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
