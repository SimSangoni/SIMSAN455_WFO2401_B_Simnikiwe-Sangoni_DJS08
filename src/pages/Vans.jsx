import React from "react"

export default function Vans() {
    const [vansData, setVansData] = React.useState({})

    React.useEffect(function() {
        console.log("Effect ran")
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data))
    }, [])

    const vanElement = vansData.vans.map(van => {
        return (
            <div className="van-tile">
                <div >
                    <img src={van.imageUrl}/>
                    {van.name}
                    {`$${van.price} /day`}
                </div>
                <button className={`van-type ${van.type}`}>{van.type}</button>
            </div>
            
        )
    })
    

    return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
            {vanElement}
        </div>
    </div>
    )
  }