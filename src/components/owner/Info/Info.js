import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import { updateRestaurant } from '../../../actions/restaurantActions';

const Info = () => {
    const restaurantInfo = useSelector((state) => state.restaurant[0])
    const dispatch = useDispatch();



    if(!restaurantInfo) {
        window.location.replace('/owner')
    }

    const [ giftCardAccepted, setGiftCardAccepted ] = useState(restaurantInfo.giftCardAccepted)
    const [ deliverableDisplaying, setDeliverableDisplaying ] = useState(restaurantInfo.isDeliverable)
    const [ fileUpload, setFileUpload ] = useState()
    const [ edit, setEdit ] = useState(true)

    useEffect(() => {
        if(restaurantInfo) setStoreInfo(restaurantInfo)
        return () => {
            
        }
    }, [restaurantInfo])

    useEffect(() => {
        return () => {

        }
    }, [])
    
    // const [ storeInfo, setStoreInfo ] = useState({ openingAt:'', closingAt:'', dayOff:'', orderCall:'', restaurantThumbnail: '', restaurantFlyer: '', acceptGiftCard: giftCardAccepted, giftCard: "", isDeliverable: deliverableDisplaying,  deliveryCoverage: '', deliveryBasicCharge: '', deliveryChargeByArea: '', minimumOrder: '', contractToken: '', contractExp: '', orderIndex: '',  bizRegNo: '',  tags: '', isClosed: false, description: '', isDeleted: false
    // })
    
    const [ storeInfo, setStoreInfo ] = useState({...restaurantInfo})
    
    
    const { restaurantAddress, restaurantOldAddress, openingAt, closingAt, dayOff, orderCall, restaurantThumbnail, isDeliverable, deliveryCoverage, deliveryBasicCharge, deliveryChargeByArea, minimumOrder, bizRegNo, description
    } = storeInfo
    
    const onChange = (e) => {
        setStoreInfo({
            ...storeInfo, [e.target.name]: e.target.value
        })
        console.log(storeInfo)
    }
    // 상품권 허용여부

    const giftCardChangeEvent = () => {
        setGiftCardAccepted(!giftCardAccepted)
        setStoreInfo({...storeInfo, acceptGiftCard:!giftCardAccepted})
        }

    const [ giftCardChecked, setGiftCardChecked ] = useState([])

    const handleGiftCardToggle = ( value ) => {
        const newChecked = [ ...giftCardChecked ];
        newChecked.push(value)
        setGiftCardChecked(newChecked)
        setStoreInfo({...storeInfo, giftCard:newChecked})
        }

    // 배달 가능여부
    const deliverChangeEvent = () => {
        setDeliverableDisplaying(!deliverableDisplaying)
        setStoreInfo({...storeInfo, isDeliverable:!deliverableDisplaying})
        }

    const onSubmit = async (e) => {
        e.preventDefault();
        const body = JSON.stringify(storeInfo)
        let formData = new FormData();
        formData.append('registerData', body)
        formData.append('file', fileUpload)

        if(restaurantInfo) {
            dispatch(updateRestaurant(restaurantInfo._id, formData))
            .then( res => 
                alert('수정되었습니다')
                )
                .catch (err => 
                    alert('나중에 다시 시도해주세요')
                    )
        } 
        setEdit(!edit)
    }

    return (
        <div style={{width: '80%', margin:'70px auto', background:'lightgray', zIndex:'9999'}}>
            <p style={{cursor:'pointer', textAlign:'right', background:'lightGray', width:'120px'}} onClick={(e) => setEdit(!edit)}>{edit ? "수정하기" : "수정취소"}</p>
            {restaurantInfo ? 
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem'}}>
                <div className="register_form_header">
                    <div>항목</div><div>내용</div>
                </div>
                
                <div className="register_form_input">
                    <div>고유코드</div>
                    {restaurantInfo.restaurantCode}
                </div>

                <div className="register_form_input" id="restaurant">
                    <div className="post_title">상호명</div>
                    <p>{restaurantInfo.restaurantName}</p><p>{restaurantInfo.restaurantBranch}</p>
                </div>


                <div className="register_form_input">
                    <div>로고</div>
                    <FileBase
                        style={{color:'red', width:'70%', textAlign:'center'}}
                        type="file"
                        multiple={false}
                        name="restaurantThumbnail"
                        value={restaurantThumbnail}
                        onDone={({base64}) => setStoreInfo({...storeInfo, restaurantThumbnail: base64})}
                    />
                </div>

                <div className="register_form_input">
                    <div>전단지</div>
                    <input
                        style={{color:'red', width:'170px', border:'0', outline:'0'}}
                        type="file"
                        name="file"
                        disabled={edit}
                        onChange={e => {
                            const flyerUpload = e.target.files[0];
                            setFileUpload(flyerUpload) }
                        }
                    />
                </div>

                <div className="register_form_input">
                    <div>도로명주소</div>
                    <input
                        name="restaurantAddress"
                        value={restaurantAddress}
                        placeholder="매장주소 입력"
                        disabled={edit}
                        onChange={(e) => setStoreInfo({...storeInfo, restaurantAddress: e.target.value})}
                    />
                </div>

                <div className="register_form_input">
                    <div>지번주소</div>
                    <input
                    style={{border: '0', borderRadius:'10px', paddingLeft:'10px'}}
                        name="restaurantOldAddress"
                        value={restaurantOldAddress}
                        placeholder="매장주소 입력"
                        disabled={edit}
                        onChange={(e) => setStoreInfo({...storeInfo, restaurantOldAddress: e.target.value})}
                    />
                </div>

                <div className="register_form_input" id="restaurant">
                    <div className="post_title">영업시간</div>
                    <input
                        name="openingAt"
                        value={openingAt}
                        placeholder="10:00"
                        disabled={edit}
                        onChange={onChange}
                        style={{width:'65px', textAlign:'center'}}
                    />
                    ~<input
                        name="closingAt"
                        value={closingAt}
                        placeholder="22:00"
                        disabled={edit}
                        onChange={onChange}
                        style={{width:'65px', textAlign:'center'}}
                    />
                </div>

                <div className="register_form_input">
                    <div className="post_title">휴무일</div>
                    <input
                        name="dayOff"
                        value={dayOff}
                        disabled={edit}
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>주문전화</div>
                    <input
                        name="orderCall"
                        value={orderCall}
                        disabled={edit}
                        placeholder="고객용 주문전화"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>최소주문금액</div>
                    <input
                        name="minimumOrder"
                        value={minimumOrder}
                        placeholder="배달 최소주문금액"
                        disabled={edit}
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>지역화폐/상품권</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        name="acceptGiftCard"
                        // defaultChecked={storeInfo.giftCardAccepted}
                        checked={storeInfo.giftCardAccepted}
                        value={giftCardAccepted}
                        disabled={edit}
                        onChange={giftCardChangeEvent}
                    />
                    </label>
                </div>

                {giftCardAccepted ? <div className="register_form_input">
                    <div></div>
                    <div style={{display: 'flex', alignItems:'center'}}>
                    온누리
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        name="giftCard"
                        value="온누리"
                        onChange={(e) => handleGiftCardToggle(e.target.value)}
                        />
                    김천사랑
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        name="giftCard"
                        value="김천사랑"
                        onChange={(e) => handleGiftCardToggle(e.target.value)}
                        />
                        </div>
                </div> : ""}

                <div className="register_form_input">
                    <div>배달/퀵가능 여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        name="isDeliverable"
                        checked={isDeliverable}
                        value={isDeliverable}
                        disabled={edit}
                        onChange={deliverChangeEvent}
                    /></label>
                </div>
        
                {deliverableDisplaying ? 
                <div>
                <div className="register_form_input">
                    <div className="post_title">배달지역</div>
                    <input
                        name="deliveryCoverage"
                        value={deliveryCoverage}
                        placeholder="예) 신음동, 성내동"
                        onChange={(e) => setStoreInfo({...storeInfo, deliveryCoverage: e.target.value.split(',')})}
                    /> 
                </div>

                <div className="register_form_input">
                    <div className="post_title">기본 배달료</div>
                    <input
                        name="deliveryBasicCharge"
                        value={deliveryBasicCharge}
                        placeholder="기본 배달료 입력"
                        onChange={(e) => setStoreInfo({...storeInfo, deliveryBasicCharge: e.target.value})}
                    /> 
                </div>

                <div className="register_form_input">
                    <div className="post_title">동네별 배달료</div>
                    <input
                        name="deliveryChargeByArea"
                        value={deliveryChargeByArea}
                        placeholder="평화동 : 3000, 부곡동: 2000"
                        onChange={(e) => setStoreInfo({...storeInfo, deliveryChargeByArea: e.target.value})}
                    />
                    </div>
                </div>
    : ""}

                <div className="register_form_input">
                    <div>추가설명</div>
                        <input
                        name="description"
                        value={description}
                        disabled={edit}
                        onChange={onChange}
                        />
                </div>

                <div className="register_form_input">
                    <div>사업자번호</div>
                    <input
                        name="bizRegNo"
                        value={bizRegNo}
                        disabled={edit}
                        onChange={onChange}
                        />
                </div>
                    <button style={{zIndex:'9999'}} disabled={edit}>입력완료</button>
            </form>
            : ""}
        </div>
    )
}

export default React.memo(Info)
