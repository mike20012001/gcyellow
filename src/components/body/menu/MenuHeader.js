import React from 'react'
import { numberCommas } from '../../../utils/numbering'
import '../restaurant/restaurant/Restaurant.css'


const MenuHeader = ({ filtered }) => {

    return (
        <div>
            <div style={{textAlign:'center', fontSize:"1.3rem", marginTop:'0.8rem'}}>
                <div style={{maxWidth: '700px', margin: '0 auto', width:'97%'}}>
                {filtered.map( (c) => (
                    // <div key={c._id} style={{border: '1px solid gray'}}>
                    <div key={c._id}>
                        <div style={{display:'flex', justifyContent: 'flex-start', background: '#333333', color:'#fefefe', padding: '8px 20px', fontSize:'1.2rem', fontWeight:'bold', marginBottom:'10px', borderRadius:'12px 12px 0 0'}}>
                            <p>{c.restaurantName}{c.restaurantBranch ? " - " + c.restaurantBranch : ""}</p>
                            {c.giftCard[0] !== "" ? <p style={{position:'relative', top:'-3px', left:'10px', fontSize:'9px', color:'#fefefe'}}>
                                <font style={{display:'flex', flexDirection:'row', width:'100%'}}>{c.giftCard.map( (d) => <font key={d} style={{border:'1px solid gray', padding:'1px 5px', fontSize:'10px', margin:'0 2px', borderRadius:'2px'}}> {d} </font> )}</font></p> : ""}</div>
                    <table style={{width:'100%'}}>
                        <tbody className="menuheaderContents" style={{marginTop:'2px', borderRadius:'0 0 5px 5px'}}>
                            <tr>
                                <td className="headerTitle"><b>영업시간</b></td><td>{c.openingAt} ~ {c.closingAt}</td>
                            </tr>
                            {c.deliveryCoverage[0] !== "" ?
                            <tr>
                                <td className="headerTitle"><b>배달지역</b></td><td>{numberCommas(c.deliveryCoverage.map((c) => c))} </td>
                            </tr> : "" }
                            {(c.minimumOrder).includes('문의') || (c.minimumOrder) === "" ?  
                            <tr>
                                <td className="headerTitle"><b>최소주문</b></td><td>문의</td>
                            </tr>  :
                            <tr>
                                <td className="headerTitle"><b>최소주문</b></td><td>{numberCommas(c.minimumOrder)}원</td>
                            </tr>
                                }
                        {(c.deliveryBasicCharge).includes('000') ? 
                            <tr>
                                <td className="headerTitle"><b>기본배달료</b></td><td>{numberCommas(c.deliveryBasicCharge)}원</td>
                            </tr> :
                            <tr> 
                                <td className="headerTitle"><b>기본배달료</b></td><td>문의</td>
                            </tr>
                            }
                        {(c.deliveryChargeByArea) ?
                            <tr>
                                <td className="headerTitle"><b>지역별요금</b></td><td>{c.deliveryChargeByArea}</td> 
                            </tr> :
                            <tr>
                                <td className="headerTitle"><b>지역별요금</b></td> <td>문의</td>
                            </tr>
                            }
                        {(c.restaurantAddress) ? 
                        <tr>
                            <td className="headerTitle"><b>매장주소</b></td><td>{c.restaurantAddress} {c.restaurantOldAddress ? <p style={{padding:'5px 0'}}>{c.restaurantOldAddress}</p>: "" } </td>
                         </tr> :
                         <tr>
                             <td className="headerTitle"><b>매장주소</b></td> <td>"정보없음"</td>
                        </tr>
                        }                     
                        </tbody>
                    </table>
                        <p style={{fontSize:'10px', color:'red', textAlign:'left', padding:'10px 0px 0px 25px'}}><u className="tag is-danger">카드결제시 미리!</u><u className="tag is-warning">배달료는 현금으로 기사님께!</u></p>
                        {c.ownerComment ? <p style={{display: 'flex', alignItems: 'center', fontSize:'0.8rem', textAlign:'left', margin:'10px', fontWeight:'800', border:'1px solid red', height:"30px", color:"black", borderRadius:'2px'}}> &nbsp;사장님 Comment : {c.ownerComment}</p> : ""}
                        <p style={{fontSize:'1rem', textAlign:'center', margin:'10px 0', background:'#c82828', padding:'8px', color:'#fefefe', fontWeight:'bold', borderRadius:'0 0 12px 12px'}}><a className="orderCall" style={{color:'inherit', padding: '20px 100px'}} href={`tel://${c.orderCall}`}>전화 주문하기</a></p>
                        <p style={{fontSize:'11px', padding:'5px 0'}}>* 업체가 부담하는 <font style={{color: 'red', fontWeight:'bold'}}> "주문 수수료가 없는" </font> 일반전화입니다.</p>
                    {/* </div> */}
                    </div>))}
                </div>
            </div>
            </div>
    )
}

export default React.memo(MenuHeader)
