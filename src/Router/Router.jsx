import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('categories.json'),
                
            },
            {
                path: '/statistics',
                element: <Statistics />

            },
            {
                path: 'applied_jobs',
                element: <AppliedJobs />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
])