import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/constants";

import { About, HireMe, Contact, Home, Projects } from '@/views/Core'
import { Core } from "@/components/layouts/Core";


export const routerProvider = createBrowserRouter([{
    path: ROUTES.CORE.HOME,
    Component: Core,
    children: [
        {
            path: ROUTES.CORE.HOME,
            Component: Home
        },
        {
            path: ROUTES.CORE.ABOUT,
            Component: About
        },
        {
            path: ROUTES.CORE.HIRE_ME,
            Component: HireMe
        },
        {
            path: ROUTES.CORE.CONTACT,
            Component: Contact
        },
        {
            path: ROUTES.CORE.PROJECTS,
            Component: Projects
        }
    ]
}])