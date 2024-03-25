import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blogs from "../Pages/Blogs/Blogs";
import JobDetails from "../Components/JobDetails/JobDetails";

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
                path: '/',
                element: <Statistics />

            },
            {
                path: 'applied_jobs',
                element: <AppliedJobs />,
                loader: () => fetch('../jobs.json')
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: () => fetch('../jobs.json'),
            }
        ]
    }
])