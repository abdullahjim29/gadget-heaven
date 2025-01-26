import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Join from "../pages/Join";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            loader: () => fetch('../gadgetCategories.json'),
            element: <Home/>,
            children: [
              {
                path: '/categories/:category',
                loader: () => fetch('../products.json'),
                element: <Products/>
              }
            ],
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
        },
        {
          path: '/products/:productId',
          element: <ProductDetails/>,
          loader: () => fetch('../products.json')
        }
      ]
    },
  ]);

export default router;