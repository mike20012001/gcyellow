import React from 'react'
import { numberCommas } from '../../../utils/numbering'

const MenuContents = ({ foodList }) => {
    
    return (
            <div style={{padding: '0 !important'}}>
                {foodList.length ? foodList.map((c) => (
                    <div key={c._id} style={{display: 'flex', background:'#FEFEFE', maxWidth:'700px', margin: '7px auto', borderBottom: '1px solid lightgray', marginBottom:'15px', borderRight: '1px solid lightgray', padding: '10px 5%'}}>
                        <div>
                            <img src={c.foodPhoto} height='80px' width='112px' alt="foodPhoto" style={{border: '1px solid black', padding: '0', margin:'0'}} />
                        </div>
                        <div style={{marginLeft:'15px', fontSize:'0.8rem', paddingLeft:'10%'}}>
                            <p style={{fontWeight:'bold'}}>{c.foodName}</p>
                            <p style={{fontSize:'0.7rem', marginLeft: '5px', color: 'gray'}}>{c.foodDescription}</p>
                            <p style={{fontWeight:'bold', marginTop:'10px'}}>가격 : {numberCommas(c.foodPrice)}원 &nbsp;{(c.foodPriceOption !== undefined || "") ? "/  " + c.foodPriceOption : "" }</p>
                        </div>
                </div>
                )) : ""}

            </div>
    )
}
export default MenuContents

        // <div style={{border: '1px solid green', maxWidth:'700px', minWidth:'320px', margin: '0 auto'}}>
        //     <div style={{border: '1px solid black', width:'100%', minWidth:'320px'}}>
        //         {foodList.length ? foodList.map((c) => (
        //             <div key={c._id} style={{display: 'flex', background:'#FEFEFE', width:'100%', margin: '7px auto', border: '1px solid gray', padding: '0 5%'}}>
        //                 <div>
        //                     <img src={c.foodPhoto} height='80px' width='112px' alt="foodPhoto" style={{border: '1px solid black', padding: '0', margin:'0'}} />
        //                 </div>
        //                 <div style={{marginLeft:'15px', fontSize:'0.8rem'}}>
        //                     <p style={{fontWeight:'bold', margin: '0'}}>{c.foodName}</p>
        //                     <p style={{margin:'0', fontSize:'0.7rem'}}>{c.foodDescription}</p>
        //                     <p style={{fontWeight:'bold'}}>기본 : {numberCommas(c.foodPrice)}원 &nbsp;{(c.foodPriceOption !== undefined || "") ? "/  " + c.foodPriceOption : "" }</p>
        //                 </div>
        //         </div>
        //         )) : ""}

        //     </div>
        // </div>