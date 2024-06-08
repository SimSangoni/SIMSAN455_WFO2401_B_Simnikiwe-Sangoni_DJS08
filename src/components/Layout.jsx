import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <h1>This is the Layout Component</h1>
            <Outlet />
        </div>
    )
}