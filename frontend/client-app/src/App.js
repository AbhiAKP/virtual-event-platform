import Register from "./pages/register/register"
import Login from './pages/login/login'
import ErrorPage from "./pages/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
    
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
