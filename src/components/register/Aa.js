import React from 'react'
import { useSelector } from 'react-redux'

const Aa = () => {
    const aa = useSelector((state) => state.restaurant[0])

    return (
        <div>
            <h1>{aa ? aa.restaurantCode : ""}</h1>
        </div>
    )
}

export default Aa
