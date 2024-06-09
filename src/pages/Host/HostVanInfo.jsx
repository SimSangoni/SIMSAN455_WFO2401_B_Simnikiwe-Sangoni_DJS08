import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const [currentVan] = useOutletContext();
    return (
        <div>
            <h2>Van info here</h2>
            {currentVan.description}
        </div>
    )
};