import React from 'react'
import { Link } from 'react-router-dom'
import { numberCommas } from '../../../utils/numbering'
import { useSelector } from 'react-redux'
import '../restaurant/restaurant/Restaurant.css'

const SearchResult = (props) => {
    const result = useSelector((state) => state.restaurant)

    return (
        <div>
            <div style={{fontSize:'1.2rem', textAlign:'center', margin:'1.5rem auto 1rem auto'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{color:'red', fontWeight:'bold'}}>{props.match.params.keyword}</div>{result.length !== 0 ?
                    `에 대해 ${result.length}건이 검색되었습니다.` :
                    "의 검색결과가 없습니다."
                    }
                </div>
                <div className="subtitle" style={{color:'gray', textAlign:'center', fontSize:'1rem', marginTop:'1.3rem'}}>
                    {result.length === 0 ?
                    `단어로 검색하시거나, 다른 단어를 사용해서 검색해보세요` : ""
                    }
                </div>
            </div>
            <div className="restaurant">
                {result.map((restaurant) => (
                    <Link to={`/restaurant/${restaurant.restaurantCategory}/${restaurant.restaurantCode}`} key={restaurant._id}>
                    <div className="restaurant_card active">
                    <div className="card_text_header">{restaurant.restaurantName} {restaurant.restaurantBranch ? "- " + restaurant.restaurantBranch : ""}</div> 
                        <div className="card_body">
                        <div className="card_text_wrap">
                            <div><p className="tag is-white">영업시간</p><p className="tag is-white"> {restaurant.openingAt} ~ {restaurant.closingAt}</p><br/></div>

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

                            <div><p className="tag is-white">기본배달료</p>{(restaurant.deliveryBasicCharge).includes('000') ? 
                                <p className="tag is-white">{numberCommas(restaurant.deliveryBasicCharge)}원</p> : 
                                <p className="tag is-white">문의</p> }</div>

                            {(restaurant.restaurantAddress) ? 
                                <p className="tag is-primary" style={{marginLeft:'10px'}}>{restaurant.restaurantOldAddress}</p> : 
                                "" }

                        </div>
                        <div className="thumb">
                            <img src={restaurant.restaurantThumbnail} alt='thumbnail'></img>
                        </div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchResult
