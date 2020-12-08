import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurant } from '../../../actions/restaurantActions'
import Restaurant from './restaurant/Restaurant'
import Submenu from './restaurant/Submenu'

const Restaurants = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const restaurant = useSelector((state) => state.restaurant)

    useEffect(() => {
        dispatch(getRestaurant(params.id))
        },
        [params.id, dispatch])
    
    return (
        <div>
            <Submenu />
             <div className="restaurants">
            {restaurant ? restaurant.map((c) => (
                <Restaurant key={c._id} restaurant={c} />
            )) : ""}
        </div>
        </div>
    )
}

export default Restaurants
