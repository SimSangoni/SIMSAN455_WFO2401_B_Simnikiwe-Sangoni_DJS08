import React from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail(){
    const {id} = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    return (
        <div>
            <h1>Your Host Van Details page is here</h1>
            <img src={currentVan.imageUrl} />
        </div>
    )
}