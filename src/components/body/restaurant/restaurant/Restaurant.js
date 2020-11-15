import React from 'react'
import { Link } from 'react-router-dom'
import './Restaurant.css'

const Restaurant = ({ restaurant }) => {
    
    return (
        <div className="restaurant">
            <Link to={{pathname:`/restaurant/${restaurant.category}/${restaurant.restaurantCode}`, state: {name: restaurant} }}>
            <div className="restaurant_card">
                <p className="card_text_header">{restaurant.restaurantName}</p>
                <div className="card_body">
                <div className="card_text_wrap">
                    <p className="card_text">최소주문 : {restaurant.minOrderAmount}원</p>
                    <p className="card_text">영업시간 : {restaurant.workingHours}</p>
                    <p className="card_text">주문전화 : {restaurant.contact}</p>
                    <p className="card_text">배달지역 : {restaurant.deliveryCoverage}</p>
                    <p className="card_text">배달요금 : {restaurant.deliveryCharge}</p>
                </div>
                <div className="thumb">
                    <img src={restaurant.restaurantThumb} alt='thumbnail'></img>
                </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Restaurant
