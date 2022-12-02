import { Children } from "react"
import { Navigate, useRoutes } from "react-router-dom"
import DashboardLayout from "./layouts/dashboard"
import PageNotFoundLayout from "./layouts/dashboard/notFound"
import AppPage from "./pages/AppPage"
import LoginPage from "./pages/LoginPage"
import Page404 from "./pages/Page404"
import UserPage from "./pages/UserPage"

export default function Router() {
    const routes = useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout/>,
            children:[
            {element: <Navigate to="homepage/app"/>, index:true},
            {path:'app', element: <AppPage/>},
            {path: 'user', element: <UserPage/>}
            ]
        },
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
            element: <PageNotFoundLayout />,
            children: [
              { element: <Navigate to="/dashboard/app" />, index: true },
              { path: '404', element: <Page404 /> },
              { path: '*', element: <Navigate to="/404" /> },
            ],
          },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
          },

    ])
    return routes
}