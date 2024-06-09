import React from "react"
import { Link,  useSearchParams } from "react-router-dom"
import capitalizeFirstLetter from "../utils"



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
                    to={`/vans/${van.id}`}
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
    

    return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <Link className="van-type simple" to="?type=simple">simple</Link>
            <Link className="van-type simple" to="?type=luxury">luxury</Link> 
            <Link className="van-type simple" to="?type=rugged">rugged</Link>  
            <Link className="van-type clear-filters" to=".">clear</Link> 
        </div>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
    )
  }

