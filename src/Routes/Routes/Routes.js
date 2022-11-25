import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";

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
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;