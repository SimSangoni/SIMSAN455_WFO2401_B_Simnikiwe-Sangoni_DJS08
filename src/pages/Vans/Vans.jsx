import React from "react"
import { Link,  useSearchParams } from "react-router-dom"
import capitalizeFirstLetter from "../../utils"



export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get('type')

    React.useEffect(function() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter ? 
    vans.filter(van => van.type === typeFilter)
    : vans



    const vanElements = displayedVans.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link 
                    to={van.id} 
                    state={{ search: `?${searchParams.toString()}`, 
                    type: typeFilter }}
                    aria-label={`View details for ${van.name}, 
                    priced at $${van.price} per day`}>
                        <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                        <div className="van-info">
                            <h2>{van.name}</h2>
                            <p>${van.price}<span>/day</span></p>
                        </div>
                        <i className={`van-type ${van.type} selected`}>{capitalizeFirstLetter(van.type)}</i>
                </Link> 
            </div>
          
        )
    })


    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
            prevParams.delete(key)
            } else {
            prevParams.set(key, value)
            }
            return prevParams
        })
        }

    return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <button 
                className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} 
                onClick={() => handleFilterChange("type", "simple")}>
                    Simple
            </button>

            <button 
                className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                onClick={() => handleFilterChange("type", "luxury")}>
                    Luxury
            </button> 

            <button 
                className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} 
                onClick={() => handleFilterChange("type", "rugged")}>
                    Rugged
            </button>  

            { typeFilter ? (
                <button 
                className="van-type clear-filters" 
                onClick={() => handleFilterChange("type", null)}>
                    Clear filter
            </button> 
            ): null}
        </div>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
    )
  }




