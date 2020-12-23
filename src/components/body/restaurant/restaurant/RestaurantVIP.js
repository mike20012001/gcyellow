import React from 'react'
import { Link } from 'react-router-dom'
import { numberCommas } from '../../../../utils/numbering'
import './Restaurant.css'


const RestaurantVIP = ({ restaurant }) => {
    return (
        <div className="restaurantVIP">
            {/* <Link to={{pathname:`/restaurant/${restaurant.restaurantCategory}/${restaurant.restaurantCode}`, state: {name: restaurant} }}> */}
            <Link to={`/restaurant/${restaurant.restaurantCategory}/${restaurant.restaurantCode}`}>
            <div className="restaurant_card">
                <div className="card_text_header">{restaurant.restaurantName}</div>
                <div className="card_body">
                <div className="card_text_wrap" key={restaurant._id}>
                    <div><p className="tag is-info">영업시간</p><p className="tag is-warning"> {restaurant.openingAt} ~ {restaurant.closingAt}</p><br/></div>

                    <div><p className="tag is-info">휴 무 일</p>{restaurant.dayOff ? 
                        <p className="tag is-warning">{restaurant.dayOff}</p> : 
                        <p className="tag is-danger">확인필요</p>}</div>

                    <div><p className="tag is-info">상품권사용</p>{restaurant.giftCard[0] !== "" ? 
                        <p className="tag is-warning" >가능</p>:
                        <p className="tag is-danger" >문의</p>}</div>

                    <div><p className="tag is-info">최소주문</p>{(restaurant.minimumOrder).includes('문의') || (restaurant.minimumOrder) === "" ?
                        <p className="tag is-danger"> 문의 </p> :
                        <p className="tag is-warning"> {numberCommas(restaurant.minimumOrder)}원</p>}</div>

                    <div><p className="tag is-info">배달지역</p>{restaurant.deliveryCoverage[0] !== "" ?
                        <p className="tag is-warning">{numberCommas(restaurant.deliveryCoverage.map((c) => ` ${c}`))}</p> :
                        <p className="tag is-danger">문의</p>}</div>

                    <div><p className="tag is-info">기본배달료</p>{(restaurant.deliveryBasicCharge).includes('000') ? 
                        <p className="tag is-warning">{numberCommas(restaurant.deliveryBasicCharge)}원</p> : 
                        <p className="tag is-danger">문의</p> }</div>

                    {(restaurant.restaurantAddress) ? 
                        <p className="tag is-primary">{restaurant.restaurantAddress}</p> : 
                        "" }

                </div>
                <div className="thumb">
                    <img src={restaurant.restaurantThumbnail} alt='thumbnail'></img>
                </div>
                </div>
            </div>
            </Link>
            <div style={{textAlign:'center', fontSize:'0.8rem', fontWeight:'bold', color:'black', paddingBottom:'5px'}}>
                Premiered
            </div>
        </div>
    )
}

export default RestaurantVIP
