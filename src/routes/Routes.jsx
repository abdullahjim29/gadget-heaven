import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Join from "../pages/Join";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/statistics',
            element: <Statistics/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/join',
            element: <Join/>
        }
      ]
    },
  ]);

export default router;