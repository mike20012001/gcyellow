import React from 'react'
import { numberCommas } from '../../../utils/numbering'
import '../restaurant/restaurant/Restaurant.css'


const MenuHeader = ({ filtered }) => {

    return (
        <div>
            <div style={{textAlign:'center', fontSize:"1.3rem", marginTop:'0.8rem'}}>
                <div style={{maxWidth: '700px', margin: '0 auto', width:'97%'}}>
                {filtered.map( (c) => (
                    <div key={c._id}>
                        <div style={{display:'flex', justifyContent: 'center', color: 'red', padding: '8px 0px', fontSize:'1rem', fontWeight:'bold', border: '1px solid gray'}}>
                            <p>{c.restaurantName}{c.restaurantBranch ? " - " + c.restaurantBranch : ""}</p>
                            {c.giftCard[0] !== "" ? <p style={{position:'relative', top:'0px', left:'10px', fontSize:'9px', color:'#333333'}}>
                                <font style={{display:'flex', flexDirection:'row', width:'100%'}}>{c.giftCard.map( (d) => <font key={d} style={{border:'1px solid gray', padding:'1px 5px', fontSize:'10px', margin:'0 2px', borderRadius:'2px'}}> {d} </font> )}</font></p> : ""}</div>

                    <div style={{border: '1px solid gray', marginTop:'2px', borderRadius:'0 0 5px 5px'}}>
                        <p className="menuheaderContents"><b>영업시간</b> : {c.openingAt} ~ {c.closingAt}</p>

                        {c.deliveryCoverage[0] !== "" ? 
                        <p className="menuheaderContents"><b>배달지역</b> : {numberCommas(c.deliveryCoverage.map((c) => ` ${c}`))}</p> :
                        ""}

                        {(c.minimumOrder).includes('문의') || (c.minimumOrder) === "" ?  
                            <p className="menuheaderContents" ><b>최소주문</b> : 문의 </p> : 
                            <p className="menuheaderContents" ><b>최소주문</b> : {numberCommas(c.minimumOrder)}원</p>}

                        {(c.deliveryBasicCharge).includes('000') ? 
                            <p className="menuheaderContents" ><b>기본배달료</b> : {numberCommas(c.deliveryBasicCharge)}원</p> : 
                            <p className="menuheaderContents" ><b>기본배달료</b> : 문의</p>}

                        {(c.deliveryChargeByArea) ?
                            <p className="menuheaderContents" ><b>지역별요금</b> : {c.deliveryChargeByArea} </p> :
                            <p className="menuheaderContents" ><b>지역별요금</b> : 문의</p>}
                            
                        {(c.restaurantAddress) ? 
                            <p className="menuheaderContents" ><b>매장주소</b> : {c.restaurantAddress} / {c.restaurantOldAddress ? c.restaurantOldAddress : "" } </p> :
                            "정보없음"}

                        <p style={{fontSize:'10px', color:'red', textAlign:'left', padding:'10px 0px 0px 25px'}}><u style={{border: '1px solid black', padding:'1px 3px'}}>카드결제시 미리 말씀</u>해주셔야 하며, <u style={{border: '1px solid black', padding:'1px 3px'}}>배달료는 현금으로 기사님께</u> 전달 해주셔야 합니다.</p>
                        
                        {c.ownerComment ? <p style={{display: 'flex', alignItems: 'center', fontSize:'0.8rem', textAlign:'left', margin:'10px', fontWeight:'800', border:'1px solid red', height:"30px", color:"black", borderRadius:'2px'}}> &nbsp;사장님 Comment : {c.ownerComment}</p> : ""}
                        <p style={{fontSize:'1rem', textAlign:'center', margin:'10px 0', background:'#007bff', padding:'8px', color:'#FEFEFE', fontWeight:'bold'}}><a className="orderCall" style={{color:'inherit', padding: '20px 100px'}} href={`tel://${c.orderCall}`}>전화 주문하기</a></p>
                        <p style={{fontSize:'11px', padding:'5px 0'}}>* 업체 일반전화로, 업체가 부담하는 수수료가 없습니다.</p>
                    </div>
                    </div>))}
                </div>
            </div>
            </div>
    )
}

export default MenuHeader

        // <div>
        //     <div style={{textAlign:'center', fontSize:"1.3rem", marginTop:'0.8rem'}}>
        //         <div style={{maxWidth: '700px', margin: '0 auto', width:'97%'}}>
        //         {filtered.map( (c) => (
        //             <div key={c._id} style={{border: '1px solid gray', borderRadius:'3px'}} >
        //                 <div style={{display: 'flex', background:'#e84135', color: 'white', textAlign:'left', padding: '7px 20px', fontSize:'1.1rem', fontWeight:'bold'}}>
        //                     <p>{c.restaurantName}{c.restaurantBranch ? " - " + c.restaurantBranch : ""}</p>
        //                     {c.giftCard[0] !== "" ? <p style={{position:'relative', top:'0px', left:'10px', fontSize:'10px', color:'yellow'}}>
        //                         <i style={{display:'flex', flexDirection:'row', width:'100%'}}>{c.giftCard.map( (d) => <i key={d} style={{border:'1px solid white', padding:'1px 5px', fontSize:'10px', margin:'0 2px', borderRadius:'2px'}}> {d} </i> )}</i></p> : ""}</div>
        //                 <p style={{fontSize:'0.8rem', textAlign:'left', color:'#333333', margin:'10px'}}>영업시간 : {c.openingAt} ~ {c.closingAt}</p>
        //                 {c.deliveryCoverage[0] !== "" ? <p style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>배달지역 : {numberCommas(c.deliveryCoverage.map((c) => ` ${c}`))}</p> : ""}
        //                 {(c.minimumOrder).includes('문의') || (c.minimumOrder) === "" ?  <p style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>최소주문 : 문의 </p> : <p  style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>최소주문 : {numberCommas(c.minimumOrder)}원</p>}
        //                 {(c.deliveryBasicCharge).includes('000') ? <p style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>기본배달료 : {numberCommas(c.deliveryBasicCharge)}원</p> : <p style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>기본배달료 : 문의</p>}
        //                 {(c.restaurantAddress) ?  <p style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>매장주소 : {c.restaurantAddress} / {c.restaurantOldAddress ? c.restaurantOldAddress : "" } </p> : "정보없음"}
        //                 {(c.deliveryChargeByArea) ? <p style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>지역별요금 : {c.deliveryChargeByArea}</p> : <p style={{fontSize:'0.8rem', textAlign:'left', margin:'10px'}}>지역별요금 : 문의</p>}
        //                 {c.ownerComment ? <p style={{display: 'flex', alignItems: 'center', fontSize:'0.8rem', textAlign:'left', margin:'10px', fontWeight:'800', border:'1px solid red', height:"30px", color:"black", borderRadius:'2px'}}> &nbsp;사장님 Comment : {c.ownerComment}</p> : ""}
        //                 <p style={{fontSize:'1rem', textAlign:'center', margin:'10px 0', background:'#186ea3', padding:'8px', color:'#FEFEFE', fontWeight:'bold'}}><a className="orderCall" style={{color:'inherit'}} href={`tel://${c.orderCall}`}>매장 전화주문</a></p>
        //             </div>))}
        //         </div>
        //     </div>
        // </div>