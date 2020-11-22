import React from 'react'
import { numberCommas } from '../../../utils/numbering'

const MenuContents = ({ foodList }) => {
    return (
        <div style={{margin:'0 auto'}}>
            <div>
                {foodList.length ? foodList.map((c) => (
                    <div key={c._id} style={{display: 'flex', background:'#FEFEFE', minWidth:'320px', width:'100%', margin: '7px auto'}}>
                        <div>
                            <img src={c.foodPhoto} height='80' width='112' alt="foodPhoto"/>
                        </div>
                        <div style={{marginLeft:'15px', fontSize:'0.8rem'}}>
                            <p style={{fontWeight:'bold', margin: '0', marginTop:'15px'}}>{c.foodName}</p>
                            <p style={{margin:'0', fontSize:'0.7rem'}}>{c.foodDescription}</p>
                            <p>{numberCommas(c.foodPrice)}원</p>
                        </div>
                </div>
                )) : ""}
            </div>
        </div>
    )
}

export default MenuContents
