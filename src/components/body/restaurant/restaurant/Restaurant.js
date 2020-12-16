import React from 'react'
import { Link } from 'react-router-dom'
import { numberCommas } from '../../../../utils/numbering'
import './Restaurant.css'

const Restaurant = ({ restaurant }) => {
    return (
        <div className="restaurant">
            {/* <Link to={{pathname:`/restaurant/${restaurant.restaurantCategory}/${restaurant.restaurantCode}`, state: {name: restaurant} }}> */}
            <Link to={`/restaurant/${restaurant.restaurantCategory}/${restaurant.restaurantCode}`}>
            <div className="restaurant_card">
                <p className="card_text_header">{restaurant.restaurantName}</p>
                <div className="card_body">
                <div className="card_text_wrap" key={restaurant._id}>
                    <p className="tag is-info" style={{width:'59.53px', marginRight:'3px'}}>영업시간</p><p className="tag is-warning"> {restaurant.openingAt} ~ {restaurant.closingAt}</p><br/>
                    <p className="tag is-info" style={{width:'59.53px', marginRight:'3px'}}>휴 무 일</p>{restaurant.dayOff ? <p className="tag is-warning">{restaurant.dayOff}</p> : <p className="tag is-danger">확인필요</p>} 
                    {(restaurant.minimumOrder).includes('문의') || (restaurant.minimumOrder) === "" ?  <p className="card_text" style={{fontWeight:'bold'}} >최소주문 : 문의 </p> : <p className="card_text" style={{fontWeight:'bold'}}>최소주문 : {numberCommas(restaurant.minimumOrder)}원</p>}
                    {restaurant.giftCard[0] !== "" ? <p className="card_text" >상 품 권 : 사용가능 </p> : ""}
                    {restaurant.deliveryCoverage[0] !== "" ? <p className="card_text" >배달지역 : {numberCommas(restaurant.deliveryCoverage.map((c) => ` ${c}`))}</p> : ""}
                    {(restaurant.deliveryBasicCharge).includes('000') ? <p className="card_text" style={{fontWeight:'bold'}}>기본배달료 : {numberCommas(restaurant.deliveryBasicCharge)}원</p> : "" }
                    {(restaurant.restaurantAddress) ? <p className="card_text">식당주소 : {restaurant.restaurantAddress}</p> : "" }
                </div>
                <div className="thumb">
                    <img src={restaurant.restaurantThumbnail} alt='thumbnail'></img>
                </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Restaurant
