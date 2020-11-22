import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { numberCommas } from '../../../utils/numbering'
import { useDispatch } from 'react-redux'
import { getRestaurantByCode } from '../../../actions/restaurantActions'

const MenuHeader = ({ filtered }) => {
    const params = useParams();
    const dispatch = useDispatch()
    const phoneNumber = filtered[0].contact
    return (
        <div>
            <div style={{textAlign:'center', fontSize:"1.3rem", marginTop:'1rem'}}>
                <div style={{maxWidth: '700px', margin: '0 auto'}}>
                {filtered.map( (c) => (
                    <div key={c._id} style={{border: '1px solid gray'}} >
                        <div style={{display: 'flex', background:'red', color: 'white', textAlign:'left', padding: '0 10px', fontSize:'1.1rem', fontWeight:'bold'}}> <p>{c.restaurantName}</p><p style={{position:'relative', top:'10px', left:'10px', fontSize:'10px', color:'yellow'}}><i>지역상품권</i></p></div>
                        <p style={{fontSize:'0.8rem', textAlign:'left', color:'#333333', margin:'6px'}}>영업시간 : {c.workingHours}</p>
                        <p style={{fontSize:'0.8rem', textAlign:'left', color:'#333333', margin:'6px'}}>배달지역 : {c.deliveryCoverage}</p>
                        <p style={{fontSize:'0.8rem', textAlign:'left', color:'#333333', margin:'6px'}}>최소주문 : {numberCommas(c.minOrderAmount)}원</p>
                        <p style={{fontSize:'1rem', textAlign:'center', color:'#333333', margin:'0px', background:'#333333', padding:'10px', color:'#FEFEFE', fontWeight:'bolder'}}>주문하기 : <a style={{color:'inherit'}}href={`tel://${phoneNumber}`}>{c.contact}</a></p>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default MenuHeader
