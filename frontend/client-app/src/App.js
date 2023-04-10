// import Register from "./pages/register/register"
// import Login from './pages/login/login'
import Home from './pages/home/home'
import ErrorPage from "./pages/error-page";
import ExploreCourses from './pages/exploreCourses/ExploreCourses';
import ViewCourse from './pages/viewCourse/ViewCourse';
import MyCourses from './pages/MyCourses/MyCourses';
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

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
      path: "/",
      element: <div>Root</div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/explore",
      element: <ExploreCourses />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/viewcourse",
      element: <ViewCourse />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/mycourse",
      element: <MyCourses />,
      errorElement: <ErrorPage />,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
