import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../pages/Blog/Blog";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllSeller from "../../pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../pages/Dashboard/Payment/Payment";


import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories/:id',
                element:<Products></Products>,
                loader:({params}) => fetch(`https://micro-tech-server.vercel.app/categories/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
          
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/dashboard',
                element: <Dashboard></Dashboard>
            },
          

            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            
            },
            {
                path: '/dashboard/addproduct',
                //admin
                element: <AddProduct></AddProduct>,
                loader: () => fetch('https://micro-tech-server.vercel.app/products')
            },
            {
                path: '/dashboard/myproducts',
                //admin
                element: <MyProducts></MyProducts>,
               
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`https://micro-tech-server.vercel.app/bookings/${params.id}`)
            }
          
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])

export default router;