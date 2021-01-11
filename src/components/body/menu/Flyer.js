import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Flyer = ({ filtered }) => {
    const history = useHistory()
    console.log(filtered)
    useEffect(() => {    
        if(filtered.length <= 0 ) {
            alert('다시 시도해주세요.')
            history.push('/')
        } 
    }, [history, filtered.length])

    return (
        <div>
            {filtered.length > 0 ? <img src={`/${filtered[0].restaurantFlyer}`} alt="flyer" width="100%" /> : ""}
            {filtered[0].restaurantFlyer2.length > 100 ? <img src={filtered[0].restaurantFlyer2} alt="flyer" width="100%" /> : ""}
        </div>
    )
}

export default Flyer
