import React, { useState, useEffect } from 'react'
import './styles/styles.css'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { registerRestaurant, updateRestaurant } from '../../../actions/restaurantActions'

function RegStorePost() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [ storeInfo, setStoreInfo ] = useState({
        restaurantCode : "",
        restaurantName : "",
        restaurantOwner: "",
        ownerContact: "",
        restaurantCategory: "",
        workingHours: "",
        restaurantAddress: "",
        restaurantLocalCurrency: "",
        isDeliverable: "",
        deliveryCoverage: "",
        contact: "",
        minOrderAmount: "",
        deliveryCharge: "",
        isClosed: ""
    })
    const { restaurantCode, restaurantName, restaurantOwner, ownerContact, restaurantCategory, workingHours, restaurantAddress, deliveryCoverage, contact, minOrderAmount, deliveryCharge } = storeInfo
    
    const restaurantInfo = useSelector((state) => params.id ? state.restaurant.find((p) => p.restaurantCode === params.id) : null)

    useEffect(() => {
        if(restaurantInfo) setStoreInfo(restaurantInfo)
    }, [restaurantInfo])


    const onChange = (e) => {
        setStoreInfo({
            ...storeInfo, [e.target.name]: e.target.value
        })
    }

    const clear = () => {
        setStoreInfo({
            restaurantCode : "",
            restaurantName : "",
            restaurantOwner: "",
            ownerContact: "",
            restaurantCategory: "",
            workingHours: "",
            restaurantAddress: "",
            restaurantLocalCurrency: "",
            isDeliverable: "",
            deliveryCoverage: "",
            contact: "",
            minOrderAmount: "",
            deliveryCharge: "",
            isClosed: ""
        })
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        
        if(restaurantInfo) {
            dispatch(updateRestaurant(params.id, storeInfo))
        } else {
            dispatch(registerRestaurant(storeInfo))
        }
        clear()
        history.push('/register/store/post')

    }

    return (
        <div className="store_form_wrap">
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>
                <div className="store_form_header">
                    <div>항목</div><div>내용</div>
                </div>

                <div className="store_form_input">
                    <div>식별코드</div>
                    <input
                        name="restaurantCode"
                        value={restaurantCode}
                        placeholder=""
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>상호명</div>
                    <input
                        name="restaurantName"
                        value={restaurantName}
                        placeholder="음식점 이름"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>대표자</div>
                    <input
                        name="restaurantOwner"
                        value={restaurantOwner}
                        placeholder="예) 홍길동"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>대표자 연락처</div>
                    <input
                        name="ownerContact"
                        value={ownerContact}
                        placeholder="예) 010-000-0000"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>음식종류</div>
                    <input
                        name="restaurantCategory"
                        value={restaurantCategory}
                        placeholder="예) 한식, 양식, 분식"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>영업지 주소</div>
                    <input
                        name="restaurantAddress"
                        value={restaurantAddress}
                        placeholder="매장주소 입력"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>운영시간</div>
                    <input
                        name="workingHours"
                        value={workingHours}
                        placeholder="영업시간(10:00~22:00)"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>주문전화</div>
                    <input
                        name="contact"
                        value={contact}
                        placeholder="고객용 주문전화"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>최소주문금액</div>
                    <input
                        name="minOrderAmount"
                        value={minOrderAmount}
                        placeholder="배달 최소주문금액"
                        onChange={onChange}
                    />
                </div>

                <div className="store_form_input">
                    <div>지역 상품권 사용</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능<input
                        style={{width:'20px'}}
                        type="radio"
                        name="restaurantLocalCurrency"
                        value={true}
                        onChange={onChange}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>불가능
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="restaurantLocalCurrency"
                        value={false}
                        onChange={onChange}
                    /></label>
                </div>

                <div className="store_form_input">
                    <div>배달/퀵가능 여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능<input
                        style={{width:'20px'}}
                        type="radio"
                        name="isDeliverable"
                        value={true}
                        onChange={onChange}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>불가능
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isDeliverable"
                        value={false}
                        onChange={onChange}
                    /></label>
                </div>

                <div className="store_form_input">
                    <div>배달지역</div>
                    {storeInfo.isDeliverable ? <input
                        name="deliveryCoverage"
                        value={deliveryCoverage}
                        placeholder="예) 신음동, 성내동"
                        onChange={onChange}
                    /> : ""}

                </div>

                <div className="store_form_input">
                    <div>배달료</div>
                    {storeInfo.isDeliverable ?
                    <input
                        name="deliveryCharge"
                        value={deliveryCharge}
                        placeholder="배달료 입력"
                        onChange={onChange}
                    /> : ""}
                </div>

                <div className="store_form_input">
                    <div>폐업여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>영업중
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isClosed"
                        value={false}
                        onChange={onChange}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>폐업
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isClosed"
                        value={true}
                        onChange={onChange}
                    /></label>
                </div>
                    <button>{params.id ? "수정" : "입력"}</button>
            </form>
        </div>
    )
}

export default React.memo(RegStorePost);
