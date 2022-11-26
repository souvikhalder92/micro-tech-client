import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../pages/Blog/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";

import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories/:id',
                element:<Products></Products>,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
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
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
          
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])

export default router;