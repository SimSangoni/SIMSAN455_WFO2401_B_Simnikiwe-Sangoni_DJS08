import React from "react";
import { Outlet } from "react-router-dom";


export default function Layout(){
    return (
        <div>
            <nav>
                <Link to='/host'>Dashboard</Link>
                <Link to='/host/income'>Income</Link>
                <Link to='/host/reviews'>Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}