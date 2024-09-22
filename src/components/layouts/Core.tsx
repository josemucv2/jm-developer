import { Outlet } from "react-router-dom"
import { SideNav } from '../sections'

export const Core = () => {
    return (
        <div>
            <SideNav />
            <Outlet />
        </div>
    )
}