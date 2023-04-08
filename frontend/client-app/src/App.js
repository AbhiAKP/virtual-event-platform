// import Register from "./pages/register/register"
// import Login from './pages/login/login'
import Home from './pages/home/home'
import ErrorPage from "./pages/error-page";
import ExploreCourses from './pages/exploreCourses/ExploreCourses';
import ViewCourse from './pages/viewCourse/ViewCourse';
import MyCourses from './pages/MyCourses/MyCourses';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
