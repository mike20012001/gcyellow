import React, { useState, useEffect } from 'react'
import './styles/styles.css'
import FileBase from 'react-file-base64'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { registerRestaurant, updateRestaurant } from '../../../actions/restaurantActions'
import notAvailable from './styles/not-available.png'

function RegStorePost() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const restaurantInfo = useSelector((state) => params.id ? state.restaurant.find((p) => p.restaurantCode === params.id) : "")

    useEffect(() => {
        if(restaurantInfo) setStoreInfo(restaurantInfo)
    }, [restaurantInfo])
    
    const [ storeInfo, setStoreInfo ] = useState({
        restaurantCode : "",
        restaurantName : "",
        restaurantThumb: notAvailable,
        restaurantFlyer: notAvailable,
        restaurantFlyer2: notAvailable,
        restaurantOwner: "",
        ownerContact: "",
        restaurantCategory: "",
        workingHours: "",
        restaurantAddress: "",
        restaurantLocalCurrency: true,
        isDeliverable: true,
        deliveryCoverage: "",
        deliveryCondition: "",
        contact: "",
        minOrderAmount: "",
        deliveryCharge: "",
        isClosed: false
    })
    
    const { restaurantCode, restaurantName, restaurantOwner, restaurantThumb, restaurantFlyer, restaurantFlyer2, ownerContact, restaurantCategory, workingHours, restaurantAddress, deliveryCoverage, contact, minOrderAmount, deliveryCharge, deliveryCondition } = storeInfo
    

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
        <div className="register_form_wrap">
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>
                <div className="register_form_header">
                    <div>항목</div><div>내용</div>
                </div>
                {restaurantInfo._id ? <div><button style={{width:'100%', letterSpacing:'unset'}}><Link to={{pathname:`/register/menu/post/${restaurantInfo.restaurantCode}`, state:{restaurantInfo}}}>메뉴보기/등록</Link></button></div> : ""}

                <div className="register_form_input">
                    <div>카테고리</div>
                    <select 
                        style={{border:'none', outline:'none', background:'transparent', borderRadius:'5px'}}
                        name="restaurantCategory"
                        value={restaurantCategory}
                        onChange={onChange}
                    >
                        <option value="choose">선택</option>
                        <option value="K001">한식</option>
                        <option value="K002">치킨</option>
                        <option value="K003">피자/파스타</option>
                        <option value="K004">햄버거</option>
                        <option value="K005">족발/보쌈</option>
                        <option value="J001">회/초밥</option>
                        <option value="C001">중화요리</option>
                        <option value="N001">야식</option>
                        <option value="S001">분식</option>
                        <option value="D001">커피/디저트</option>
                    </select>
                </div>

                <div className="register_form_input">
                    <div>고유코드</div>
                    <input
                        name="restaurantCode"
                        value={restaurantCode}
                        placeholder=""
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>상호명</div>
                    <input
                        name="restaurantName"
                        value={restaurantName}
                        placeholder="음식점 이름"
                        onChange={onChange}
                    />
                </div>


                <div className="register_form_input">
                    <div>썸네일</div>
                    <FileBase
                        style={{color:'red'}}
                        type="file"
                        multiple={false}
                        name="restaurantThumb"
                        value={restaurantThumb}
                        onDone={({base64}) => setStoreInfo({...storeInfo, restaurantThumb: base64})}
                    />
                </div>

                <div className="register_form_input">
                    <div>전단지</div>
                    <FileBase
                        style={{color:'red'}}
                        type="file"
                        multiple={false}
                        name="restaurantFlyer"
                        value={restaurantFlyer}
                        onDone={({base64}) => setStoreInfo({...storeInfo, restaurantFlyer: base64})}
                    />
                </div>

                <div className="register_form_input">
                    <div>전단지2</div>
                    <FileBase
                        style={{color:'red'}}
                        type="file"
                        multiple={false}
                        name="restaurantFlyer2"
                        value={restaurantFlyer2}
                        onDone={({base64}) => setStoreInfo({...storeInfo, restaurantFlyer2: base64})}
                    />
                </div>

                <div className="register_form_input">
                    <div>대표자</div>
                    <input
                        name="restaurantOwner"
                        value={restaurantOwner}
                        placeholder="예) 홍길동"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>대표자 연락처</div>
                    <input
                        name="ownerContact"
                        value={ownerContact}
                        placeholder="예) 010-000-0000"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>매장 주소</div>
                    <input
                        name="restaurantAddress"
                        value={restaurantAddress}
                        placeholder="매장주소 입력"
                        onChange={(e) => setStoreInfo({...storeInfo, restaurantAddress: e.target.value.split(' ')})}
                    />
                </div>

                <div className="register_form_input">
                    <div>운영시간</div>
                    <input
                        name="workingHours"
                        value={workingHours}
                        placeholder="영업시간(10:00~22:00)"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>주문전화</div>
                    <input
                        name="contact"
                        value={contact}
                        placeholder="고객용 주문전화"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>최소주문금액</div>
                    <input
                        name="minOrderAmount"
                        value={minOrderAmount}
                        placeholder="배달 최소주문금액"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>지역 상품권 사용</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능<input
                        style={{width:'20px'}}
                        type="radio"
                        name="restaurantLocalCurrency"
                        defaultValue={true}
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

                <div className="register_form_input">
                    <div>배달/퀵가능 여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능<input
                        style={{width:'20px'}}
                        type="radio"
                        name="isDeliverable"
                        defaultValue={true}
                        onChange={(e) => setStoreInfo({...storeInfo, isDeliverable: e.target.value})}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>불가능
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isDeliverable"
                        value={false}
                        onChange={(e) => setStoreInfo({...storeInfo, isDeliverable: e.target.value})}
                    /></label>
                </div>

                <div className="register_form_input">
                    <div>배달지역</div>
                    {storeInfo.isDeliverable ? <input
                        name="deliveryCoverage"
                        value={deliveryCoverage}
                        placeholder="예) 신음동, 성내동"
                        onChange={(e) => setStoreInfo({...storeInfo, deliveryCoverage: e.target.value.split(',')})}
                    /> : ""}
                </div>

                <div className="register_form_input">
                    <div>기본 배달료</div>
                    {storeInfo.isDeliverable ?
                    <input
                        name="deliveryCharge"
                        value={deliveryCharge}
                        placeholder="기본 배달료 입력"
                        onChange={onChange}
                    /> : ""}
                </div>

                <div className="register_form_input">
                    <div>동네별 배달료</div>
                    {storeInfo.isDeliverable  ?
                    <input
                        name="deliveryCondition"
                        value={deliveryCondition}
                        placeholder="평화동 : 3000, 부곡동: 2000"
                        onChange={onChange}
                    /> : ""}
                </div>

                <div className="register_form_input">
                    <div>폐업여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>영업중
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isClosed"
                        value={false}
                        checked={true}
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
                    <button>{restaurantInfo._id ? "수정" : "입력"}</button>
            </form>
        </div>
    )
}

export default React.memo(RegStorePost);
