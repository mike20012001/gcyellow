import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurant } from '../../../actions/restaurantActions'
import Restaurant from './restaurant/Restaurant'
import RestaurantVIP from './restaurant/RestaurantVIP'
import Submenu from './restaurant/Submenu'

const Restaurants = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const restaurant = useSelector((state) => state.restaurant)
    const restaurantVIP = restaurant.filter((c) =>  c.hasContract === true) 

    useEffect(() => {
        dispatch(getRestaurant(params.id))
        },
        [params.id, dispatch])
    
    return (
        <div>
            <Submenu />
             <div className="restaurants">
             {restaurantVIP ? restaurantVIP.map((c) => (
                <RestaurantVIP key={c._id} restaurant={c} />
            )) : "" }            
             </div>
             <hr style={{height: '10px', background: 'lightgray'}} />
             <div className="restaurants">
            {restaurant ? restaurant.map((c) => (
                <Restaurant key={c._id} restaurant={c} />
            )) : "" }
             
        </div>
        <hr style={{height: '10px', background: 'lightgray'}} />
        </div>
    )
}

export default Restaurants
