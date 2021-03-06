import React, { useState, useEffect, useMemo } from 'react'
import './styles/styles.css'
import FileBase from 'react-file-base64'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { registerRestaurant, updateRestaurant } from '../../../actions/restaurantActions'
import notAvailable from './styles/not-available.png'

export function randAlphabet(length) {
        var randomChars = 'ACDFHIJKLMPQRSUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
}


function RegStorePost({ currentId, setCurrentId }) {
    const dispatch = useDispatch();
    
    const [ giftCardAccepted, setGiftCardAccepted ] = useState(false)
    const [ deliverableDisplaying, setDeliverableDisplaying ] = useState(false)
    const [ isStoreClosed, setIsStoreClosed] = useState(false)
    const [ contract, setContract ] = useState(false)
    const [ fileUpload, setFileUpload ] = useState()

    const getRandom = useMemo(() => {
        const a = Math.floor(Math.random() * 1000001)
        const b = randAlphabet(2)
        const c = b+"-"+a
        return c
    }, [])
    
    const restaurantInfo = useSelector((state) => currentId ? state.restaurant.find((p) => p._id === currentId) : '')
    
    useEffect(() => {
        if(restaurantInfo) setStoreInfo(restaurantInfo)
    }, [restaurantInfo])
    
    const [ storeInfo, setStoreInfo ] = useState({ restaurantCategory:'', restaurantCode: getRandom, restaurantName:'', restaurantBranch: '', restaurantAddress:'', restaurantOldAddress:'', openingAt:'', closingAt:'', dayOff:'', orderCall:'', restaurantThumbnail: notAvailable, restaurantFlyer: notAvailable, restaurantFlyer2: notAvailable, acceptGiftCard: giftCardAccepted, giftCard: "", isDeliverable: deliverableDisplaying,  deliveryCoverage: '', deliveryBasicCharge: '', deliveryChargeByArea: '', minimumOrder: '', hasContract: contract, contractToken: '', contractExp: '', orderIndex: '',  bizRegNo: '',  tags: '', isClosed: false, description: '', isDeleted: false
    })
    
    
    const { restaurantCode, restaurantCategory, restaurantName, restaurantBranch, restaurantAddress, restaurantOldAddress, openingAt, closingAt, dayOff, orderCall, restaurantThumbnail, isDeliverable, deliveryCoverage, deliveryBasicCharge, deliveryChargeByArea, minimumOrder, hasContract, contractExp, orderIndex, bizRegNo, tags, description
    } = storeInfo
    
    // console.log(storeInfo)
    const onChange = (e) => {
        setStoreInfo({
            ...storeInfo, [e.target.name]: e.target.value
        })
    }
    
    // const clear = () => {
    //     setStoreInfo({ restaurantCategory:'', restaurantCode: getRandom, restaurantName:'', restaurantAddress:'', openingAt:'', closingAt:'', dayOff:'', orderCall:'', restaurantThumbnail: notAvailable, restaurantFlyer: notAvailable, restaurantFlyer2: notAvailable, acceptGiftCard: '', giftCard: "", isDeliverable: '',  deliveryCoverage: '', deliveryBasicCharge: '', deliveryChargeByArea: '', minimumOrder: '', hasContract: '', contractToken: '', contractExp: '', orderIndex: '',  bizRegNo: '',  tags: '', isClosed: false, isDeleted: false, description: ''
    //     })
    // }

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

// 계약여부
const contractChangeEvent = () => {
    setContract(!contract)
    setStoreInfo({...storeInfo, hasContract:!contract})
    }


// 폐업 여부
const isClosedChangeEvent = () => {
    setIsStoreClosed(!isStoreClosed)
    setStoreInfo({...storeInfo, isClosed:!isStoreClosed})
    }

const onSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify(storeInfo)
    let formData = new FormData();
    formData.append('registerData', body)
    formData.append('file', fileUpload)

    if(restaurantInfo) {
        dispatch(updateRestaurant(currentId, formData))
        .then( res => 
            console.log('update Restaurant ======> ', res)
            // window.location.reload()
            )
        .catch (err => 
            alert('나중에 다시 시도해주세요')
            )
    } else {
        dispatch(registerRestaurant(formData))
        .then( res => 
            console.log('uploaded')
            // window.location.reload()
            )
        .catch (err => 
            alert('나중에 다시 시도해주세요')
            )
    }
    // clear()
    // window.location.reload()
}

    return (
        <div className="register_form_wrap">
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>
                <div className="register_form_header">
                    <div>항목</div><div>내용</div>
                </div>
                {currentId ? <div><button style={{width:'100%', letterSpacing:'unset'}}><Link to={{pathname:`/register/menu/post/${restaurantInfo.restaurantCode}`, state:{restaurantInfo}}}>메뉴보기/등록</Link></button></div> : ""}

                <div className="register_form_input">
                    <div className="post_title">카테고리</div>
                    <select 
                        style={{border:'none', outline:'none', background:'red', borderRadius:'5px'}}
                        name="restaurantCategory"
                        value={restaurantCategory}
                        onChange={(e) => setStoreInfo({...storeInfo, restaurantCategory:e.target.value})}
                    >
                        <option value="choose">선택</option>
                        <option value="K001">한식/국밥/면</option>
                        <option value="E001">피자/양식</option>
                        <option value="C001">중화/베트남/타이</option>
                        <option value="K002">치킨</option>
                        <option value="K004">족발/보쌈</option>
                        <option value="K005">야식</option>
                        <option value="K006">찜요리</option>
                        <option value="J001">회/일식</option>
                        <option value="S001">분식</option>
                    </select>
                </div>

                <div className="register_form_input">
                    <div className="post_title">고유코드</div>
                    <input
                        name="restaurantCode"
                        value={restaurantCode}
                        disabled
                    />
                </div>

                <div className="register_form_input" id="restaurant">
                    <div className="post_title">상호명</div>
                    <input
                        name="restaurantName"
                        value={restaurantName}
                        placeholder="음식점 이름"
                        onChange={onChange}
                        />
                    <input
                        name="restaurantBranch"
                        value={restaurantBranch}
                        placeholder="지점명"
                        onChange={onChange}
                    />
                </div>


                <div className="register_form_input">
                    <div className="post_title">썸네일{restaurantInfo.restaurantThumbnail ===  null ? "OK" : "NO"}</div>
                    <FileBase
                        style={{color:'red'}}
                        type="file"
                        multiple={false}
                        name="restaurantThumbnail"
                        value={restaurantThumbnail}
                        onDone={({base64}) => setStoreInfo({...storeInfo, restaurantThumbnail: base64})}
                    />
                </div>

                <div className="register_form_input">
                    <div className="post_title">전단지{restaurantInfo.restaurantFlyer ? "OK" : "NO"}</div>
                    <input
                        style={{color:'red'}}
                        type="file"
                        name="file"
                        onChange={e => {
                            const flyerUpload = e.target.files[0];
                            setFileUpload(flyerUpload) }
                        }
                    />
                </div>

                {/* <div className="register_form_input">
                    <div>대표자</div>
                    <input
                        name="restaurantOwner"
                        value={restaurantOwner}
                        readOnly
                        disabled
                    />
                </div> */}

                <div className="register_form_input">
                    <div className="post_title">매장주소(도로명)</div>
                    <input
                        name="restaurantAddress"
                        value={restaurantAddress}
                        placeholder="매장주소 입력"
                        onChange={(e) => setStoreInfo({...storeInfo, restaurantAddress: e.target.value})}
                    />
                </div>

                <div className="register_form_input">
                    <div className="post_title">매장주소(지번)</div>
                    <input
                        name="restaurantOldAddress"
                        value={restaurantOldAddress}
                        placeholder="매장주소 입력"
                        onChange={(e) => setStoreInfo({...storeInfo, restaurantOldAddress: e.target.value})}
                    />
                </div>

                <div className="register_form_input" id="restaurant">
                    <div className="post_title">영업시간</div>
                    <input
                        name="openingAt"
                        value={openingAt}
                        placeholder="10:00"
                        onChange={onChange}
                    />
                    ~<input
                        name="closingAt"
                        value={closingAt}
                        placeholder="22:00"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div className="post_title">휴무일</div>
                    <input
                        name="dayOff"
                        value={dayOff}
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div className="post_title">주문전화</div>
                    <input
                        name="orderCall"
                        value={orderCall}
                        placeholder="고객용 주문전화"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div className="post_title">최소주문금액</div>
                    <input
                        name="minimumOrder"
                        value={minimumOrder}
                        placeholder="배달 최소주문금액"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div className="post_title">지역화폐/상품권</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        name="acceptGiftCard"
                        value={giftCardAccepted}
                        onChange={giftCardChangeEvent}
                    />
                    </label>
                </div>

                {giftCardAccepted ? <div className="register_form_input">
                    <div></div>
                    <div style={{display: 'flex', alignItems:'center'}}>
                    문화상품권
                    <input
                        style={{width:'20px', marginRight:'10px'}}
                        type="checkbox"
                        name="giftCard"
                        value="문화상품권"
                        onChange={(e) => handleGiftCardToggle(e.target.value)}
                        />
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
                    재래시장
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        name="giftCard"
                        value="재래시장"
                        onChange={(e) => handleGiftCardToggle(e.target.value)}
                        />
                        </div>
                </div> : ""}

                <div className="register_form_input">
                    <div className="post_title">배달/퀵가능 여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>가능
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        name="isDeliverable"
                        value={isDeliverable}
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
                    <div className="post_title">추가설명</div>
                        <input
                        name="description"
                        value={description}
                        onChange={onChange}
                        />
                </div>

                <div className="register_form_input">
                    <div className="post_title">계약여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>계약여부
                        <input
                        style={{width:'20px'}}
                        type="checkbox"
                        onChange={contractChangeEvent}
                        />
                    </label>
                </div>
                
                {hasContract ? 
                <div>
                    <div className="register_form_input">
                        <div>계약기간</div>
                            <input
                            name="contractExp"
                            value={contractExp}
                            onChange={onChange}
                            />
                    </div>

                    <div className="register_form_input">
                        <div>순서</div>
                        <input
                            name="orderIndex"
                            value={orderIndex}
                            onChange={onChange}
                            />
                    </div>
                </div> : "" }

                <div className="register_form_input">
                    <div className="post_title">태그</div>
                        <input
                        name="tags"
                        value={tags}
                        onChange={onChange}
                        />
                </div>

                {/* <div className="register_form_input">
                    <div>메뉴</div>
                    <input
                        name="menu"
                        value={menu}
                        onChange={onChange}
                        />
                </div> */}

                <div className="register_form_input">
                    <div className="post_title">사업자번호</div>
                    <input
                        name="bizRegNo"
                        value={bizRegNo}
                        onChange={onChange}
                        />
                </div>

                <div className="register_form_input">
                    <div className="post_title">폐업여부</div>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>폐업
                    <input
                        style={{width:'20px'}}
                        type="checkbox"
                        onChange={isClosedChangeEvent}
                    /></label>

                </div>
                    <button style={{zIndex:'9999'}}>{currentId ? "수정" : "입력"}</button>
            </form>
        </div>
    )
}

export default React.memo(RegStorePost);
