import React from 'react'

const SingleMenu = ({ inSingleMenu, useState, useEffect}) => {

    // console.log('InSingleMenu', inSingleMenu)
    const [ editDisabled, setEditDisabled ] = useState(true)

    const [ foodPriceBySize, setFoodPriceBySize ] = useState([{ ...inSingleMenu.foodPriceBySize}])
    
    const [ options, setOptions ] = useState([{ ...inSingleMenu.options }])
    
    const [ comesWith, setComesWith ] = useState([{ ...inSingleMenu.comesWith }])

    const { regular, regularPromo } = foodPriceBySize
    // if(options === null) {
    //     const { optionName:, optionDetail, optionCost } = options
    // } else {

    // }
    // const { name, pcs } = comesWith
    
    const {
        franchiseSetMenuUid,
        foodNameNonFranchise, 
        foodPhotoNonFranchise, 
        foodDescNonFranchise,
        priceDifferBySize,
        foodPrice,
        hasOption,
        isNewMenu,
        isPopular,
    } = inSingleMenu
    




    const onHasOptionChange = () => {

    }

    const onPriceDifferBySize = () => {

    }

    const onIsNewMenuChange = () => {

    }
    const onIsPopularChange = () => {

    }
    // -------------------------------------------------------

    
    const onOptionsChange = (index, e) => {
        const values = [...options];
        values[index][e.target.name] = e.target.value;
        setOptions(values)
        console.log('after setOptions', options)
    }

    const onComesWithChange = (index, e) => {
        const values = [...comesWith];
        values[index][e.target.name] = e.target.value
        setComesWith(values)
        console.log('after setComeswith', comesWith)
    }


    
    // -------------------------------------------------------
    
    
    const addOptionsField = () => {
        if(options === null) {
            return setOptions([{ optionName: "", optionDetail: "", optionCost: ""}])
        } else {
            return setOptions([...options, { optionName: "", optionDetail: "", optionCost: ""}])
        }
    }
    
    const addComesWithField = () => {
        if(comesWith === null) {
            return setComesWith([{ name: '', pcs: ''}])
        } else {
           return setComesWith([...comesWith, { name: '', pcs: ''}])
        }
        // setComesWith([...comesWith, { name: '', pcs: ''}])
    }
    
    // -------------------------------------------------------

    const deleteOptionsField = (indexs) => {
        const values = [...options];
        values.splice(indexs, 1);
        setOptions(values)
        if(options.length === 0 || options === null) {
            addOptionsField()
        }
    }

    const deleteComesWithField = (index) => {
        const values = [...comesWith];
        values.splice(-1);
        setComesWith(values)
    }

    // -------------------------------------------------------
    
    useEffect(() => {
        setComesWith(inSingleMenu.comesWith)
        setOptions(inSingleMenu.options)
        return () => {}
    }, [inSingleMenu.comesWith, inSingleMenu.options ])
    
    useEffect(() => {
        return () => {}
    }, [])
    
    // -------------------------------------------------------

    return (
        <div className="priceDifferBySize_wrap"
            key={inSingleMenu._id}
            style={{display:'flex', flexDirection:'column', margin:'10px 0'}}>
            <button onClick={() => setEditDisabled(!editDisabled)}>수정하기</button>
            <label className="menu_title" style={{background:'#333333', color:'#fefefe'}}>메뉴명
                <input 
                    defaultValue={inSingleMenu.foodNameNonFranchise} 
                    value={foodNameNonFranchise}
                    disabled={editDisabled}
                    />
                    <button>수겆ㅇ</button>
                </label>

            <label className="menu_title">메뉴설명
                <textarea
                    rows="3"
                    maxLength="100"
                    defaultValue={inSingleMenu.foodDescNonFranchise}
                    autoComplete="off"
                    value={foodDescNonFranchise}
                    disabled={editDisabled}
                    />
                </label>

            <label className="menu_title">메뉴사진
                <input 
                    defaultValue={inSingleMenu.foodPhotoNonFranchise} 
                    value={foodPhotoNonFranchise}
                    disabled={editDisabled}
                />
                </label>

        <div className="menu_title_wrap">
            <label className="menu_title"
                style={{background:'#c9e6ff'}}>사이즈별<br/>가격
                <div 
                    style={{display: 'flex', justifyContent:'space-around', width:'80%' }}>
                    <label> 있음
                        <input
                            type="radio" 
                            name="priceDifferBySize"
                            checked={inSingleMenu.priceDifferBySize ? true : false} 
                            value={priceDifferBySize}
                            disabled={editDisabled}
                            onChange={onPriceDifferBySize}
                            />
                        </label>
                    <label> 없음
                        <input
                            type="radio" 
                            name="priceDifferBySize"
                            checked={!inSingleMenu.priceDifferBySize ? true : false} 
                            value={priceDifferBySize}
                            disabled={editDisabled}
                            onChange={onPriceDifferBySize}
                            />
                        </label>
                    </div>
                </label>
            {!priceDifferBySize ?
            <label className="menu_title">단품가격 (원)

                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={foodPrice}
                                    />

            </label>: ""}
            {inSingleMenu.priceDifferBySize ? 
            <label style={{border:'1px solid #fefefe', padding: '7px', borderRadius:'5px'}}>사이즈별 가격표
                <div>
                    {inSingleMenu.foodPriceBySize.map(c => (
                    <div className="priceDifferBySize_container" key={c._id}>
                        <div className="priceDifferBySize_wrap">
                            <div className="price_title">레귤러 
                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.regular} /></div>
                            <div className="price_title">할인가 
                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.regularPromo} /></div>
                        </div>
                        <div  className="priceDifferBySize_wrap">
                            <div className="price_title">미디엄 
                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.medium} /></div>
                            <div className="price_title">할인가 
                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.mediumPromo} /></div>
                        </div>
                        <div className="priceDifferBySize_wrap">
                            <div className="price_title">라지 
                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.large} /></div>
                            <div className="price_title">할인가 
                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.largePromo} /></div>
                        </div>
                        <div className="priceDifferBySize_wrap">
                            <div className="price_title">X라지 
                                <input
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.xLarge} /></div>
                            <div className="price_title">할인가 
                                <input 
                                    type="number"
                                    disabled={editDisabled}
                                    defaultValue={c.xLargePromo} /></div>
                        </div>
                    </div>
                    ))} 
                    </div>
            </label> : ""}
        </div>

        <div className="menu_title_wrap">
            <label className="menu_title" style={{background:'#c9e6ff'}}>옵션
                <div style={{display: 'flex', justifyContent:'space-around', width:'80%'}}>
                    <label> 있음
                        <input
                            type="radio" 
                            name="hasOption"
                            checked={inSingleMenu.hasOption ? true : false} 
                            value={hasOption}
                            disabled={editDisabled}
                            onChange={onHasOptionChange}
                        />
                    </label>
                    <label> 없음
                        <input
                            type="radio" 
                            name="hasOption"
                            checked={!inSingleMenu.hasOption ? true : false} 
                            value={hasOption}
                            disabled={editDisabled}
                            onChange={onHasOptionChange}
                            />
                    </label>
                </div>
                        </label>
                        <div style={{display:'flex', justifyContent:'flex-end', position:'relative', top:'-5px', alignItems:'center'}}>추가 / 삭제
                        <button onClick={() => addOptionsField()} disabled={editDisabled} style={{width:'30px', textAlign:'center', fontSize:'20px', cursor:'pointer'}}>
                            <i className="fas fa-plus-circle" style={{color:'green'}}></i></button>
                        {options !== null ? <button onClick={() => deleteOptionsField()} disabled={editDisabled} style={{width:'30px', textAlign:'center', fontSize:'20px', cursor:'pointer'}}>
                            <i className="fas fa-minus-circle" style={{color:'red'}}></i></button> : ""}
                    </div>
                {options !== null || options ? <div className="priceDifferBySize_wrap">{options.map((c, index) => (
                    <div key={c._id}>

                    <div className="option_title">옵션명
                        <input
                            name="optionName"
                            value={options.optionName}
                            defaultValue={c.optionName}
                            disabled={editDisabled}
                            onChange={(e) => onOptionsChange(index, e)}
                             /> 
                            </div>
                    <div className="option_title">옵션내용
                        <input
                            value={options.optionDetail}
                            name="optionDetail"
                            defaultValue={c.optionDetail}
                            disabled={editDisabled}
                            onChange={(e) => onOptionsChange(index, e)}
                             /> 
                            </div>
                    <div className="option_title">옵션가격(원)
                        <input
                            type="number"
                            value={options.optionCost}
                            name="optionCost"
                            defaultValue={c.optionCost}
                            disabled={editDisabled}
                            onChange={(e) => onOptionsChange(index, e)}
                             /> 
                    </div>
                            <hr />
                </div>
            ))}     
            </div> : 
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', alignItems:'center'}}>
                <p>"추가옵션" 추가하기</p>
                     <button onClick={() => addOptionsField()} disabled={editDisabled} style={{fontSize:'40px', cursor:'pointer'}}><i className="fas fa-plus-circle" style={{color:'green'}}></i></button>
            </div>
            }
        </div>
        <label className="priceDifferBySize_wrap"> 기본 제공 (콜라, 소스 등)
            <div style={{display:'flex', justifyContent:'flex-end', position:'relative', top:'-20px', alignItems:'center'}}>추가 / 삭제
                <button onClick={() => addComesWithField()} disabled={editDisabled} style={{width:'30px', textAlign:'center', fontSize:'20px', cursor:'pointer'}}><i className="fas fa-plus-circle" style={{color:'green'}}></i></button>
                <button onClick={() => deleteComesWithField()} disabled={editDisabled} style={{width:'30px', textAlign:'center', fontSize:'20px', cursor:'pointer'}}><i className="fas fa-minus-circle" style={{color:'red'}}></i></button>
            </div>
            {comesWith !== null ?
            <div className="priceDifferBySize_wrap">{comesWith.map((c, index) => (
                <div key={c._id}>
                    <div className="comeswith_title">메뉴명
                        <input
                            name="name"
                            value={comesWith.name}
                            defaultValue={c.name} 
                            disabled={editDisabled}
                            onChange={e => onComesWithChange(index, e)}
                            /> 
                            </div>
                            
                    <div className="comeswith_title">수량
                        <input
                            name="pcs"
                            value={comesWith.pcs}
                            type="number"
                            defaultValue={c.pcs} 
                            disabled={editDisabled}
                            onChange={e => onComesWithChange(index, e)}
                            />
                            </div>
                            <hr/>
                </div>
                
            ))}</div> :  
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', alignItems:'center'}}>
            <p>"기본제공 메뉴" 추가하기</p>
                 <button onClick={() => addComesWithField()} disabled={editDisabled} style={{fontSize:'40px', cursor:'pointer'}}><i className="fas fa-plus-circle" style={{color:'green'}}></i></button>
        </div>}
        </label>
        
            <label className="menu_title"> 신 메뉴
                <div style={{display: 'flex', justifyContent:'space-around', width:'80%' }}>
                            <label> 기존 메뉴
                                <input
                                    type="radio" 
                                    name="isNewMenu"
                                    checked={!inSingleMenu.isNewMenu ? true : false} 
                                    value={isNewMenu}
                                    disabled={editDisabled}
                                    onChange={onIsNewMenuChange}
                                    />
                            </label>

                            <label> 신 메뉴
                                <input
                                    type="radio" 
                                    name="isNewMenu"
                                    checked={inSingleMenu.isNewMenu ? true : false} 
                                    value={isNewMenu}
                                    disabled={editDisabled}
                                    onChange={onIsNewMenuChange}
                                />
                            </label>
                </div>
            </label>
            <label className="menu_title"> 인기메뉴
                <div style={{display: 'flex', justifyContent:'space-around', width:'80%' }}>
                            <label> 일반 메뉴
                                <input
                                    type="radio" 
                                    name="isPopular"
                                    checked={!inSingleMenu.isPopular ? true : false} 
                                    value={isPopular}
                                    disabled={editDisabled}
                                    onChange={onIsPopularChange}
                                    />
                            </label>

                            <label> 인기 메뉴
                                <input
                                    type="radio" 
                                    name="isPopular"
                                    checked={inSingleMenu.isPopular ? true : false} 
                                    value={isPopular}
                                    disabled={editDisabled}
                                    onChange={onIsPopularChange}
                                />
                            </label>
                </div>
            </label>
    </div>
    )
}

export default SingleMenu
