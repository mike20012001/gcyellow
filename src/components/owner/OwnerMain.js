import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getRestaurant, updateCloseStatus } from '../../actions/restaurantActions';

import './style.css'

const OwnerMain = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const restaurantInfo = useSelector((state) => state.restaurant[0] ? state.restaurant[0] : "")

    const [ clicked, setClicked ] = useState(false)
    const [ storeStatus, setStoreStatus ] = useState(restaurantInfo.isClosed)
    const [ storeInfo, setStoreInfo ] = useState({ isClosed: restaurantInfo.isClosed })
    
    const currentStatus = {
        isClosed: restaurantInfo.isClosed
    }    
    const {isClosed} = currentStatus

    useEffect(() => {
        if(auth.user.restaurant !== undefined && auth.user.restaurant.length >= 16 ) {
            dispatch(getRestaurant(auth.user.restaurant))
            return () => {}
        } 
        }, [auth, dispatch, restaurantInfo.isClosed])
    
    useEffect(() => {
        return () => {}
    }, [])

    const storeOpenHandler = () => {
        console.log('storeInfo', storeInfo)
        dispatch(updateCloseStatus(restaurantInfo._id, )).then(res => (
            console.log('버튼 클릭됨')
            )).catch (err => 
                console.log(err))
            }
    return (
        <div style={{background:'#f5f5f5'}}>
            <nav className="ownermain">
                <OwnerStatus auth={auth} restaurantInfo={restaurantInfo} dispatch={dispatch} setStoreInfo={setStoreInfo} setStoreStatus={setStoreStatus} storeInfo={storeInfo} storeStatus={storeStatus} storeOpenHandler={storeOpenHandler} isClosed={isClosed} currentStatus={currentStatus}/>
            <hr />
                <OwnerNavbar auth={auth} clicked={clicked} setClicked={setClicked}/>
            </nav>
        </div>
    )
}


function OwnerStatus ({auth, restaurantInfo, dispatch, storeOpenHandler, storeStatus, isClosed, setStoreInfo, currentStatus}) {


    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-around', fontSize:'13px', color:'#333333',margin:'10px 0 0 0'}}>
                <p style={{fontWeight:'bold', border:'1px solid gray', background:'#fefefe' ,padding: '5px', borderRadius:'5px'}}><Link to="/">처음페이지 이동</Link></p>{auth.user.role === 'owner' ?<p>{auth.user.name}님 어서오세요!</p> :""}
            </div>
            <div>
                {auth.user.role === 'owner' ?
                <div style={{display:'flex', justifyContent:'space-around'}}>
            <button
                className="ownermain_btn"
                value={isClosed}
                onClick={() => {
                    currentStatus.isClosed = !isClosed
                    dispatch(updateCloseStatus(auth.user.restaurant, currentStatus))
                    }}>
                <p style={{border: '1px solid gray', padding: '8px', borderRadius:"5px", background:'red', color:'#fefefe'}}>영업시작 / 종료</p></button>
                <div>
                    <p style={{textAlign:'center', fontSize:'13px'}}>상 태</p>
                        {!restaurantInfo ? "" : restaurantInfo.isClosed ?
                            <p style={{background:'gray', padding:'5px 15px', color:'white', borderRadius:'5px', fontSize:'13px'}}>영업종료</p> :
                            <p style={{background:'green', padding:'5px 15px', color:'white', borderRadius:'5px', fontSize:'13px'}}>영업중</p> }
                </div>
                    <button className="ownermain_btn">
                        브레이크타임
                    </button>
                    </div> 
                : ""
                }
            </div>
        </div>
    )
}


function OwnerNavbar ({ auth, clicked, setClicked }) {
    return (
        <div>
            {auth.user.role === 'owner' ? 
            <ul style={{display: 'flex', justifyContent:'space-around', fontSize:'12px'}}>
                <li className="ownermenu">
                    <Link to="/owner/info">기본정보</Link>
                    </li>
                <li className="ownermenu">
                    <Link to="/owner/menu">메뉴관리</Link>
                    {/* <div>
                        <Link className="ownermenuLink">전단지 변경</Link>
                        <Link className="ownermenuLink">메뉴 입력</Link>
                        <Link className="ownermenuLink">메뉴 수정</Link>
                        <Link className="ownermenuLink">재고 소진</Link>
                        <Link className="ownermenuLink">미판매설정</Link>
                    </div> */}
                </li>
                <li className="ownermenu">주문관리
                    <div>
                        {/* <Link className="ownermenuLink">총 주문내역</Link>
                        <Link className="ownermenuLink">일일 주문내역</Link>
                        <Link className="ownermenuLink">총 매출</Link>
                        <Link className="ownermenuLink">승인건</Link>
                        <Link className="ownermenuLink">취소건</Link> */}
                    </div>
                </li>
            </ul>
            : ""}
        </div>
    )
}

export default React.memo(OwnerMain)
