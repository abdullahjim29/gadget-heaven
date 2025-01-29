import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Join from "../pages/Join";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../components/Cart";
import WishlList from "../components/WishlList";
import ErrorPage from "../pages/ErrorPage";
import AllProducts from "../components/AllProducts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
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
              },
              {
                path: '/allproducts',
                loader: () => fetch('../products.json'),
                element: <AllProducts/>
              },
              {
                path: '/',
                loader: () => fetch('../products.json'),
                element: <AllProducts/>
              }
            ],
        },
        {
            path: '/statistics',
            element: <Statistics/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>,
            children: [
              {
                path: '/dashboard/cart',
                element: <Cart/>,
              },
              {
                path: '/dashboard',
                element: <Cart/>,
              },
              {
                path: '/dashboard/wishlist',
                element: <WishlList/>
              }
            ]
        },
        {
            path: '/join',
            element: <Join/>
        },
        {
          path: '/product-details/:productId',
          element: <ProductDetails/>,
          loader: () => fetch('../products.json')
        }
      ]
    },
  ]);

export default router;