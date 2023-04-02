// import Register from "./pages/register/register"
// import Login from './pages/login/login'
import Home from './pages/home/home'
import ErrorPage from "./pages/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    // {
    //   path: "/login",
    //   element: <Login />,
    //   errorElement: <ErrorPage />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    //   errorElement: <ErrorPage />,
    // },
    {
      path: "/home",
      element: <Home />,
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
