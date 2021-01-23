// import React from 'react'
// import './setmenu.css'

// const Setmenu = ({ menuInfo, useState, dispatch, useEffect, useSelector }) => {
    
//     const [ setMenuItems, setSetMenuItems ] = useState([])

//     const [ foodPriceBySize, setFoodPriceBySize ] = useState([])
//     const [ options, setOptions ] = useState([])

//     const { regular, regularPromo } = foodPriceBySize
//     const { optionName, optionDetail, optionCost } = options

//     const {
//         groupTitle,
//         franchiseSetMenuUid,
//         foodNameNonFranchise, 
//         foodPhotoNonFranchise, 
//         foodDescNonFranchise,
//         priceDifferBySize,
//         foodPrice,
//         // foodPriceBySize,
//         hasOption,
//         // options,
//         comesWith,
//         isNewMenu,
//         isPopular,
//         outOfStock,
//         isDeleted
//     } = setMenuItems
    
//     useEffect(() => {
//         if(menuInfo) setSetMenuItems(menuInfo.setMenu)
//         return () => {
//             // console.log('cleaning up')
//         }
//     }, [menuInfo])

//     useEffect(() => {
//         return () => {
//             // console.log('did unmount')
//         }
//     }, [])

//     // console.log('셋', setMenuItems)

//     const onSubmit = () => {

//     }

//     const priceDifferBySizeHandler = () => {

//     }

//     const onChange = (e) => {
//         setFoodPriceBySize({
//             ...foodPriceBySize, [e.target.name]: e.target.value
//         })
//         // console.log(foodPriceBySize)

//     }

//     // console.log('foodpricebysize', foodPriceBySize)

//     return (
        
//         <div className="owner_menu" style={{border:'1px solid gray', padding:'10px', background:'lightblue'}}>
//             {setMenuItems ?
//                 setMenuItems.map(c => (
//                         <ul key={c._id} style={{marginTop:'15px'}}>
//                             <div className="group_title" style={{height:'50px', color:'#333333', fontWeight:'600', marginBottom:'10px'}}>
//                                 <label>그룹이름</label>
//                                     <input 
//                                         style={{padding:'7px', fontSize:'13px'}}
//                                         defaultValue={c.groupTitle}
//                                         value={groupTitle}
//                                         />
//                             </div>
//                             <li style={{marginTop:'5px', fontSize:'12px', color:'#333333', background:'#c9e6ff'}}>
//                             {c.setMenu.map(inSetmenu => {
//                                 return (
//                                 <div className="priceDifferBySize_wrap" key={inSetmenu._id} style={{display:'flex', flexDirection:'column'}}>
//                                     <label className="menu_title">메뉴명
//                                     <input 
//                                         defaultValue={inSetmenu.foodNameNonFranchise} 
//                                         value={foodNameNonFranchise}
//                                     />
//                                     </label>

//                                     <label className="menu_title">메뉴설명
//                                     <textarea
//                                         rows="3"
//                                         maxLength="100"
//                                         defaultValue={inSetmenu.foodDescNonFranchise}
//                                         autoComplete="off"
//                                         value={foodDescNonFranchise}
//                                         />
//                                         </label>

//                                     <label className="menu_title">메뉴사진
//                                     <input 
//                                         defaultValue={inSetmenu.foodPhotoNonFranchise} 
//                                         value={foodPhotoNonFranchise}
//                                     />
//                                     </label>

//                                     <div className="menu_title_wrap">
//                                         <label className="menu_title" style={{background:'#c9e6ff'}}>사이즈별<br/>가격
//                                             <div style={{display: 'flex', justifyContent:'space-around', width:'70%' }}>
//                                                 <label> 있음
//                                                     <input
//                                                         type="radio" 
//                                                         name="priceDifferBySize"
//                                                         checked={inSetmenu.priceDifferBySize ? true : false} 
//                                                         value={priceDifferBySize}
//                                                         onChange={priceDifferBySizeHandler}
//                                                     />
//                                                 </label>
//                                                 <label> 없음
//                                                     <input
//                                                         type="radio" 
//                                                         name="priceDifferBySize"
//                                                         checked={!inSetmenu.priceDifferBySize ? true : false} 
//                                                         value={priceDifferBySize}
//                                                         onChange={priceDifferBySizeHandler}
//                                                         />
//                                                 </label>
//                                             </div>                                       </label>

//                                         {inSetmenu.priceDifferBySize ? 
//                                         <label style={{border:'1px solid #fefefe', padding: '7px', borderRadius:'5px'}}>사이즈별 가격표
//                                             <div>
//                                                 {inSetmenu.foodPriceBySize.map(c => (
//                                                 <div className="priceDifferBySize_container" key={c._id}>
//                                                     <div className="priceDifferBySize_wrap">
//                                                         <div className="price_title">레귤러 
//                                                             <input 
//                                                                 type="number"
//                                                                 name="regular"
//                                                                 defaultValue={c.regular}
//                                                                 value={regular}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                         <div className="price_title">할인가 
//                                                             <input 
//                                                                 type="number"
//                                                                 name="regularPromo"
//                                                                 value={regularPromo}
//                                                                 defaultValue={c.regularPromo}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                     </div>
//                                                     <div  className="priceDifferBySize_wrap">
//                                                         <div className="price_title">미디엄 
//                                                             <input 
//                                                                 type="number"
//                                                                 defaultValue={c.medium}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                         <div className="price_title">할인가 
//                                                             <input 
//                                                                 type="number"
//                                                                 defaultValue={c.mediumPromo}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                     </div>
//                                                     <div className="priceDifferBySize_wrap">
//                                                         <div className="price_title">라지 
//                                                             <input 
//                                                                 type="number"
//                                                                 defaultValue={c.large}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                         <div className="price_title">할인가 
//                                                             <input 
//                                                                 type="number"
//                                                                 defaultValue={c.largePromo}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                     </div>
//                                                     <div className="priceDifferBySize_wrap">
//                                                         <div className="price_title">X라지 
//                                                             <input
//                                                                 type="number"
//                                                                 defaultValue={c.xLarge}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                         <div className="price_title">할인가 
//                                                             <input 
//                                                                 type="number"
//                                                                 defaultValue={c.xLargePromo}
//                                                                 onChange={onChange}
//                                                                 />
//                                                                 </div>
//                                                     </div>
//                                                 </div>
//                                                 ))} 
//                                                 </div>
//                                         </label> : ""}
//                                     </div>

//                                     <div className="menu_title_wrap">
//                                         <label className="menu_title" style={{background:'#c9e6ff'}}>옵션
//                                             <div style={{display: 'flex', justifyContent:'space-around', width:'80%' }}>
//                                                 <label> 있음
//                                                     <input
//                                                         type="radio" 
//                                                         name="hasOption"
//                                                         checked={inSetmenu.hasOption ? true : false} 
//                                                         value={hasOption}
//                                                         onChange={priceDifferBySizeHandler}
//                                                     />
//                                                 </label>
//                                                 <label> 없음
//                                                     <input
//                                                         type="radio" 
//                                                         name="hasOption"
//                                                         checked={!inSetmenu.hasOption ? true : false} 
//                                                         value={hasOption}
//                                                         onChange={priceDifferBySizeHandler}
//                                                         />
//                                                 </label>
//                                             </div>
//                                         </label>

//                                         {inSetmenu.options.map(c => (
//                                             <div className="priceDifferBySize_wrap" key={c._id}>
//                                                 <div className="option_title">옵션명
//                                                     <input
//                                                         defaultValue={c.optionName} /> </div>
//                                                 <div className="option_title">옵션내용
//                                                     <input
//                                                         defaultValue={c.optionDetail} /> </div>
//                                                 <div className="option_title">옵션가격
//                                                     <input
//                                                         type="number"
//                                                         defaultValue={c.optionCost} /> </div>
//                                             </div>
//                                         ))}
                                        
//                                     </div>
                                    
//                                     <label className="priceDifferBySize_wrap"> 기본 제공 (콜라, 소스 등)
//                                         <div className="priceDifferBySize_wrap">{inSetmenu.comesWith.map(c => (
//                                             <div key={c._id}>
//                                                 <div className="comeswith_title">메뉴명
//                                                     <input
//                                                         defaultValue={c.name} /> </div>
//                                                 <div className="comeswith_title">수량용
//                                                     <input
//                                                         type="number"
//                                                         defaultValue={c.pcs} /> </div>
//                                             </div>
//                                         ))}</div>
//                                     </label>

//                                         <label className="menu_title"> 신 메뉴
//                                             <div style={{display: 'flex', justifyContent:'space-around', width:'80%' }}>
//                                                         <label> 기존 메뉴
//                                                             <input
//                                                                 type="radio" 
//                                                                 name="isNewMenu"
//                                                                 checked={!inSetmenu.isNewMenu ? true : false} 
//                                                                 value={isNewMenu}
//                                                                 onChange={priceDifferBySizeHandler}
//                                                                 />
//                                                         </label>

//                                                         <label> 신 메뉴
//                                                             <input
//                                                                 type="radio" 
//                                                                 name="isNewMenu"
//                                                                 checked={inSetmenu.isNewMenu ? true : false} 
//                                                                 value={isNewMenu}
//                                                                 onChange={priceDifferBySizeHandler}
//                                                             />
//                                                         </label>
//                                             </div>
//                                         </label>
//                                         <label className="menu_title"> 인기메뉴
//                                             <div style={{display: 'flex', justifyContent:'space-around', width:'80%' }}>
//                                                         <label> 일반메뉴
//                                                             <input
//                                                                 type="radio" 
//                                                                 name="isPopular"
//                                                                 checked={!inSetmenu.isPopular ? true : false} 
//                                                                 value={isPopular}
//                                                                 onChange={priceDifferBySizeHandler}
//                                                                 />
//                                                         </label>

//                                                         <label> 인기메뉴
//                                                             <input
//                                                                 type="radio" 
//                                                                 name="isPopular"
//                                                                 checked={inSetmenu.isPopular ? true : false} 
//                                                                 value={isPopular}
//                                                                 onChange={priceDifferBySizeHandler}
//                                                             />
//                                                         </label>
//                                             </div>
//                                         </label>
//                                 </div>
//                                 )

//                             })
//                             }
//                         </li>
//                     </ul>
//                 )
//                 )
//             : ""}
//         </div>
//     )
// }

// export default React.memo(Setmenu)
