import React from "react";
import { Outlet, useParams, Link, NavLink } from "react-router-dom";
import capitalizeFirstLetter, {activeStyle} from "../../utils";
import { getHostVans } from "../../api"

export default function HostVanDetail(){
    const {id} = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

           {currentVan && <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl}/>
                    <div className="host-van-detail-info-text">
                        <i
                                className={`van-type van-type-${currentVan.type}`}
                            >
                                {capitalizeFirstLetter(currentVan.type)}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>  
                <nav className="host-van-detail-nav">
                    <NavLink 
                    to='.' 
                    end
                    style={({isActive})=> isActive? activeStyle: null}
                    >
                        Details
                    </NavLink>
                    <NavLink 
                    to='pricing' 
                    style={({isActive})=> isActive? activeStyle: null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                    to='photos' 
                    style={({isActive})=> isActive? activeStyle: null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{currentVan}}/>
            </div>}
        </section>
    )
}
