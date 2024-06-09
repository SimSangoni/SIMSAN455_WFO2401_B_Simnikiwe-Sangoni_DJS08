import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const [currentVan] = useOutletContext();
    return (
        <div>
            <h2>Pricing view here</h2>
            {currentVan.price}
        </div>
    )
};