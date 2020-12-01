import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { getCurrentStoreFoodList, addFood, editFood } from '../../../../actions/menuActions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CurrentStoreList from './CurrentStoreList'
import notAvailable from './styles/not-available.png'

function RegMenuPost() {
    const params = useParams();
    const dispatch = useDispatch();
    
    const currentStoreList = useSelector((state) => params.id ? state.restaurant.find((p) => p.restaurantCode === params.id) : 'hi')
    console.log(currentStoreList)
//
    const [ codeUndefined, setCodeUndefined ] = useState(false)
    
    if(params.id === undefined) {
        setCodeUndefined(true)
        params.id = ''
    }
    //  const restaurantInfo = useMemo(() => props.location.state.restaurantInfo, [props.location.state.restaurantInfo])
    
    
    const [ menuInfo, setMenuInfo ] = useState({
        restaurantCode: params.id,
        categoryCode: "",
        foodName : "",
        foodPhoto: notAvailable,
        foodPrice: "",
        foodPriceOption: "",
        foodDescription: "",
        isAvailable: true,
        isOnPromo: false,
        mostSold: false,
        isNewMenu: false,
        restaurant: currentStoreList._id
    })
    
    const { foodName, categoryCode, foodDescription, foodPrice, foodPriceOption, foodPhoto, restaurantCode } = menuInfo
    

    const clear = () => {
        setMenuInfo({
            restaurantCode: params.id,
            categoryCode: "",
            foodName : "",
            foodPhoto: notAvailable,
            foodPrice: "",
            foodPriceOption: "",
            foodDescription: "",
            isAvailable: true,
            isOnPromo: false,
            mostSold: false,
            isNewMenu: false,
            restaurant: currentStoreList._id
        })
    }

    useEffect(() => {
        dispatch(getCurrentStoreFoodList(params.id))
    }, [params.id, dispatch])

    const onChange = (e) => {
        setMenuInfo({
            ...menuInfo, [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (menuInfo._id) {
            dispatch(editFood(menuInfo._id, menuInfo))
        } else {
            dispatch(addFood(menuInfo))
        }
        clear()
    }

            return (
                <div className="register_form_wrap">
            <form style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>
                <div className="register_form_header">
                    <div>항목</div><div>내용</div>
                </div>

                <div className="register_form_input">
                    <div>매장코드</div>
                    <input
                        name="restaurantCode"
                        value={restaurantCode}
                        disabled={!codeUndefined}
                        onChange={(e) => setMenuInfo({...menuInfo, restaurantCode:e.target.value})}
                        />
                </div>

                <div className="register_form_input">
                    <div>음식분류</div>
                    <select 
                        style={{border:'none', outline:'none', background:'transparent', borderRadius:'5px'}}
                        name="categoryCode"
                        value={categoryCode}
                        onChange={onChange}
                    >
                        <option value="choose">선택</option>
                        <option value="K001">한식</option>
                        <option value="K002">치킨</option>
                        <option value="K003">피자/파스타</option>
                        <option value="K004">햄버거</option>
                        <option value="K005">족발/보쌈</option>
                        <option value="J001">회/초밥</option>
                        <option value="C001">중화요리</option>
                        <option value="N001">야식</option>
                        <option value="S001">분식</option>
                        <option value="D001">커피/디저트</option>
                    </select>
                </div>

                <div className="register_form_input">
                    <div>메뉴이름</div>
                    <input
                        name="foodName"
                        value={foodName}
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>음식설명</div>
                    <input
                        name="foodDescription"
                        value={foodDescription}
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>음식가격</div>
                    <input
                        name="foodPrice"
                        value={foodPrice}
                        placeholder="숫자만 입력 (예) 25000"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>음식가격</div>
                    <input
                        name="foodPriceOption"
                        value={foodPriceOption}
                        placeholder="중:25000, 대:35000"
                        onChange={onChange}
                    />
                </div>

                <div className="register_form_input">
                    <div>음식사진</div>
                    <FileBase
                        style={{color:'red'}}
                        type="file"
                        multiple={false}
                        name="foodPhoto"
                        value={foodPhoto}
                        onDone={({base64}) => setMenuInfo({...menuInfo, foodPhoto: base64})}
                    />
                </div>

                <div className="register_form_input">
                    <div>할인여부</div>
                    <div style={{display: 'flex', justifyContent:'space-between', width: '40%', fontWeight:'bolder'}}>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>할인
                        <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isOnPromo"
                        value={true}
                        onChange={onChange}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>정상
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isOnPromo"
                        value={false}
                        defaultChecked
                        onChange={onChange}
                    /></label>
                    </div>
                </div>

                <div className="register_form_input">
                    <div>인기메뉴</div>
                    <div style={{display: 'flex', justifyContent:'space-between', width: '40%', fontWeight:'bolder'}}>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>인기<input
                        style={{width:'20px'}}
                        type="radio"
                        name="mostSold"
                        value={true}
                        onChange={onChange}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>일반
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="mostSold"
                        value={false}
                        defaultChecked
                        onChange={onChange}
                    /></label>
                    </div>
                </div>

                <div className="register_form_input">
                    <div>신메뉴</div>
                    <div style={{display: 'flex', justifyContent:'space-between', width: '40%', fontWeight:'bolder'}}>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>신규<input
                        style={{width:'20px'}}
                        type="radio"
                        name="isNewMenu"
                        value={true}
                        onChange={onChange}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>기존
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isNewMenu"
                        value={false}
                        defaultChecked
                        onChange={onChange}
                    /></label>
                    </div>
                </div>

                <div className="register_form_input">
                    <div>판매여부</div>
                    <div style={{display: 'flex', justifyContent:'space-between', width: '40%', fontWeight:'bolder'}}>
                    <label style={{display: 'flex', alignItems:'center', color:'green', fontWeight:'bolder'}}>판매<input
                        style={{width:'20px'}}
                        type="radio"
                        name="isAvailable"
                        value={true}
                        defaultChecked
                        onChange={onChange}
                    /></label>
                    <label style={{display: 'flex', alignItems:'center', color:'red', fontWeight:'bolder'}}>중단
                    <input
                        style={{width:'20px'}}
                        type="radio"
                        name="isAvailable"
                        value={false}
                        onChange={onChange}
                    /></label>
                    </div>
                </div>
                {/* <button onClick={() => dispatch(addFood(menuInfo))}>입력</button> */}
                <button onClick={onSubmit}>입력</button>
            </form>
            <hr style={{border: 'none', borderTop: '1px solid gray'}}/>
            <div>
                    <CurrentStoreList menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
            </div>
        </div>
    )
}

export default React.memo(RegMenuPost);
