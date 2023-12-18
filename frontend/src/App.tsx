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
import ViewReport from "./pages/admin/ViewReport";
import ReportGuestCrime from "./pages/ReportGuest";
import AssignedReports from "./pages/investigator/AssignedReport";
import ViewAssignReport from "./pages/investigator/ViewAssignedReport";

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
        //report-guest
        {
          path: '/report-guest',
          element: <ReportGuestCrime />
        },
        {
          path: '/report-crime',
          element: <ReportCrime />
        },
      {
        path: '/reports',
        element: <Reports />
      },
      //assigned-reports
      {
        path: '/assigned-reports',
        element: <AssignedReports />
      },
      {
        path: "assigned-report/:reportId",
        element: <ViewAssignReport />,
      },
      {
        path: "report/:reportIdViewAssignReport",
        element: <ViewReport />,
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
    <div >
      <Toaster />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
