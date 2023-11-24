import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css'
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        }
        ,
        {
          path: '/register',
          element: <Register />
        }
      ],
      
    },
    {
      path: '/user',
      element: <User />
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
