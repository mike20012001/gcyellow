import React from 'react'
import { Link } from 'react-router-dom'
import { numberCommas } from '../../../../utils/numbering'
import './Restaurant.css'

const Restaurant = ({ restaurant }) => {

    let today = new Date();
    let currentHours =  "0" + today.getHours()
    let currentMinutes = "0" + today.getMinutes()
    let currentTime = currentHours.slice(-2) + ":" + currentMinutes.slice(-2)


    let closingAdjust

    if(restaurant.closingAt !== "" && restaurant.closingAt.split(":")[0] <= 8) {
      const breakUp = restaurant.closingAt.split(":");
      const aabb = parseInt(breakUp[0], 10) + 24;
      closingAdjust = aabb + ":" + breakUp[1]
    } else if (restaurant.closingAt === "" && restaurant.openingAt === "") {
      closingAdjust = "24시간 영업"
    } else {
      closingAdjust = restaurant.closingAt
    }

    let currentTimeAdjust

    if(currentTime.split(":")[0] <= 8) {
      const breakUp = currentTime.split(":");
      const aabb = parseInt(breakUp[0], 10) + 24;
      currentTimeAdjust = aabb + ":" + breakUp[1]
    } else {
      currentTimeAdjust = currentTime
    }
  
    const closed = currentTimeAdjust > closingAdjust

    return (
        //  <div className={closed ? "restaurant inactive" : "restaurant active"}>
        <div className={"restaurant"}> 
        <Link to={`/restaurant/${restaurant.restaurantCategory}/${restaurant.restaurantCode}`}>
        <div className={closed ? "restaurant_card inactive" : "restaurant_card active"}>
            <div className="card_text_header">{restaurant.restaurantName} {restaurant.restaurantBranch ? "- " + restaurant.restaurantBranch : ""}</div> 
            <div className="card_body">
            <div className="card_text_wrap" key={restaurant._id}>
                <div><p className="tag is-white">영업시간</p>{currentTimeAdjust > closingAdjust ? <p className='tag is-danger'>영업종료</p> :<p className="tag is-white"> {restaurant.openingAt} ~ {restaurant.closingAt}</p>}<br/> </div>

                <div><p className="tag is-white">휴 무 일</p>{restaurant.dayOff ? 
                    <p className="tag is-white">{restaurant.dayOff}</p> : 
                    <p className="tag is-white">확인필요</p>}</div>

                <div><p className="tag is-white">상품권사용</p>{restaurant.giftCard[0] !== "" ? 
                    <p className="tag is-white" >가능</p>:
                    <p className="tag is-white" >문의</p>}</div>

                <div><p className="tag is-white">최소주문</p>{(restaurant.minimumOrder).includes('문의') || (restaurant.minimumOrder) === "" ?
                    <p className="tag is-white"> 문의 </p> :
                    <p className="tag is-white"> {numberCommas(restaurant.minimumOrder)}원</p>}</div>

                <div><p className="tag is-white">배달지역</p>{restaurant.deliveryCoverage[0] !== "" ?
                    <p className="tag is-white">{numberCommas(restaurant.deliveryCoverage.map((c) => ` ${c}`))}</p> :
                    <p className="tag is-white">문의</p>}</div>
{/* 
                <div><p className="tag is-white">기본배달료</p>{(restaurant.deliveryBasicCharge).includes('000') ? 
                    <p className="tag is-white">{numberCommas(restaurant.deliveryBasicCharge)}원</p> : 
                    <p className="tag is-white">문의</p> }</div> */}

                {(restaurant.restaurantAddress) ? 
                    <p className="tag is-primary">{restaurant.restaurantAddress}</p> : 
                    "" }

            </div>
            <div className="thumb">
                <img src={restaurant.restaurantThumbnail} alt='thumbnail' height="125px"></img>
            </div>
            </div>
        </div>
        </Link>
    </div>
    )
}

export default Restaurant



//         //  <div className={closed ? "restaurant inactive" : "restaurant active"}>
//         <div className={"restaurant"}> 
//         <Link to={`/restaurant/${restaurant.restaurantCategory}/${restaurant.restaurantCode}`}>
//         <div className={closed ? "restaurant_card inactive" : "restaurant_card active"}>
//             <div className="card_text_header">{restaurant.restaurantName} {restaurant.restaurantBranch ? "- " + restaurant.restaurantBranch : ""}</div> 
//             <div className="card_body">
//             <div className="card_text_wrap" key={restaurant._id}>
//                 <div><p className="tag is-white">영업시간</p>{currentTimeAdjust > closingAdjust ? <p className='tag is-danger'>영업종료</p> :<p className="tag is-white"> {restaurant.openingAt} ~ {restaurant.closingAt}</p>}<br/> </div>

//                 <div><p className="tag is-white">휴 무 일</p>{restaurant.dayOff ? 
//                     <p className="tag is-white">{restaurant.dayOff}</p> : 
//                     <p className="tag is-white">확인필요</p>}</div>

//                 <div><p className="tag is-white">상품권사용</p>{restaurant.giftCard[0] !== "" ? 
//                     <p className="tag is-white" >가능</p>:
//                     <p className="tag is-white" >문의</p>}</div>

//                 <div><p className="tag is-white">최소주문</p>{(restaurant.minimumOrder).includes('문의') || (restaurant.minimumOrder) === "" ?
//                     <p className="tag is-white"> 문의 </p> :
//                     <p className="tag is-white"> {numberCommas(restaurant.minimumOrder)}원</p>}</div>

//                 <div><p className="tag is-white">배달지역</p>{restaurant.deliveryCoverage[0] !== "" ?
//                     <p className="tag is-white">{numberCommas(restaurant.deliveryCoverage.map((c) => ` ${c}`))}</p> :
//                     <p className="tag is-white">문의</p>}</div>
// {/* 
//                 <div><p className="tag is-white">기본배달료</p>{(restaurant.deliveryBasicCharge).includes('000') ? 
//                     <p className="tag is-white">{numberCommas(restaurant.deliveryBasicCharge)}원</p> : 
//                     <p className="tag is-white">문의</p> }</div> */}

//                 {(restaurant.restaurantAddress) ? 
//                     <p className="tag is-primary">{restaurant.restaurantAddress}</p> : 
//                     "" }

//             </div>
//             <div className="thumb">
//                 <img src={restaurant.restaurantThumbnail} alt='thumbnail' height="125px"></img>
//             </div>
//             </div>
//         </div>
//         </Link>
//     </div>