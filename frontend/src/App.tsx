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
import ReportCrime from "./pages/user/ReportCrime";
import MyReports from "./pages/user/MyReports";
import Reports from "./pages/admin/Reports";
import Investigators from "./pages/admin/Investigators";
import AddInvestigator from "./pages/admin/AddInvestigator";

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
          path: '/report-crime',
          element: <ReportCrime />
        },
      {
        path: '/reports',
        element: <Reports />
      },
      {
        path: '/investigators',
        element: <Investigators />
      },
      {
        path: '/create-investigators',
        element: <AddInvestigator />
      },
        {
          path: '/my-reports',
          element: <MyReports />
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
