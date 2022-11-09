import { Children } from "react"
import { Navigate, useRoutes } from "react-router-dom/dist"
import DashboardLayout from "./layouts/dashboard"
export default function Router() {
    const routes = useRoutes([
        {
            path: '/homepage',
            element: <DashboardLayout/>,
            children:[
            {element: <Navigate to="homepage/app"/>, index:true}    ,
            {path:'app', element: <App/>},
            {path: 'user', element: <User/>}
            ]
        },
        {
            path: '/login',
            element: <Login/>
        }
    ])
    return routes
}