import React from 'react';
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../pages/AddProduct/AddProduct';
import Brands from '../pages/Home/shared/Brands/Brands';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import PerProductDetail from '../pages/PerProduct/PerProductDetail';
import AddToCart from '../pages/AddToCart/AddToCart';
import UpdateProduct from '../pages/UpdateProduct/UpdateProduct';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import ErrorPage from '../../ErrorPage';
import PrivateRoutes from './PrivateRoutes';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brands/:brandName",
        loader: () => fetch('https://ph-automotive-server.vercel.app/products'),
        element: <ProductDetails />

      },
      {
        path: "/product/:name",
        loader: () => fetch('https://ph-automotive-server.vercel.app/products'),
        element: <PrivateRoutes><PerProductDetail /></PrivateRoutes>

      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoutes><UpdateProduct /></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://ph-automotive-server.vercel.app/products/${params.id}`)

      },
      {
        path: "/addToCart",
        loader: () => fetch('https://ph-automotive-server.vercel.app/cart'),
        element: <PrivateRoutes> <AddToCart /> </PrivateRoutes>

      },
      {
        path: "/register",
        element: <Registration />

      },
      {
        path: "/Login",
        element: <Login />

      },
      // {
      //   path: "/",
      //   element: <Brands/>,
      //   loader:()=>fetch('https://ph-automotive-server.vercel.app/brands')
      // },
      {
        path: "/addProduct",
        element: <PrivateRoutes><AddProduct /></PrivateRoutes>
      }
    ],
  },
]);

export default Routes;