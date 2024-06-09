import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const {currentVan} = useOutletContext();
    return (
        <div>
            <h2>Photos view here</h2>
            <img src={currentVan.imageUrl} className="host-van-detail-image"/>
        </div>
    )
};