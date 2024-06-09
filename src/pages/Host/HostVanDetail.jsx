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

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl}/>
                    <h2>{currentVan.name}</h2>
                    <p>{currentVan.price}</p>
                    <p>{currentVan.type}</p>
                </div>
                
            </div>
        </section>
    )
}