import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurant } from '../../../actions/restaurantActions'
import Restaurant from './restaurant/Restaurant'
import Submenu from './restaurant/Submenu'

const Restaurants = ({ setCategory }) => {
    const params = useParams();
    const dispatch = useDispatch()
    const restaurant = useSelector((state) => state.restaurant)

    useEffect(() => {
        dispatch(getRestaurant(params.id))
    }, [dispatch, params.id])

    return (
        <div>
            <Submenu />
             <div className="restaurants">
            {restaurant.map((c) => (
                <Restaurant key={c._id} restaurant={c} setCategory={setCategory} />
            ))}
        </div>
        </div>
    )
}

export default Restaurants
