import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFoodMenu } from '../../../../actions/menuActions'

const CurrentStoreList = ({ menuInfo, setMenuInfo }) => {
    const foodList = useSelector((state) => state.menu)
    const dispatch = useDispatch()

    return (
        <div style={{margin: '1rem 0'}}>
        {foodList.length ? foodList.map(c => (
            <div key={c._id}>
                <div style={{display:'flex', justifyContent:'center', background:'#FEFEFE', border: '1px solid gray', minWidth: '320px', width:'60%', margin: '0 auto 1rem auto', borderRadius:'3px'}}>
                    <div style={{display:'flex', flexDirection:'column', minWidth:'112px', width:'45%'}}>
                        <img src={c.foodPhoto} height="80" width="112" alt="foodPhoto" style={{padding: '15px'}}/>
                    </div>
                    <div style={{ flexDirection:'column', minWidth:'112px', width:'55%'}}>
                        <p style={{fontSize:'0.9rem', color:'#333333', fontWeight:'bolder', margin: '30px auto 0 auto'}}>{c.foodName}</p>
                        <p style={{fontSize:'0.7rem', color:'#999999', fontWeight:'normal', margin: '0'}}>{c.foodDescription}</p>
                        <p style={{fontSize:'0.7rem', color:'#333333', fontWeight:'bold'}}>{c.foodPrice}원</p>
                        <p style={{fontSize:'0.7rem', color:'#333333', fontWeight:'bold'}}>{c.foodPriceOption}</p>
                    </div>
                </div> 
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button style={{width:'30%', marginTop: '-14px', background: 'navy', color:'white'}} onClick={() => {setMenuInfo(c)}}>수정</button>
                    <button style={{width:'30%', marginTop: '-14px', background:'red', color:'white'}} onClick={() => dispatch(deleteFoodMenu(c._id))}>삭제</button>
                </div>
                <hr />
            </div>
                )) : ""}
                </div>
    )
}

export default CurrentStoreList
