import React, { useState } from 'react'
import axios from '../../../utils/axios'


function RegMenuPost() {

    const [ menuInfo, setMenuInfo ] = useState({
        restaurantCode: "",
        categoryCode: "",
        foodName : "",
        foodPhoto: "",
        foodPrice: "",
        foodDescription: "",
        isAvailable: "",
        isOnPromo: "",
        mostSold: "",
        isNewMenu: "",
    })

    const { foodName, categoryCode, foodDescription, foodPrice, foodPhoto, isAvailable, isOnPromo, mostSold, restaurantCode } = menuInfo

    const onChange = (e) => {
        setMenuInfo({
            ...menuInfo, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/menu/', menuInfo)
        .then(res => (
            alert('등록되었습니다.')
        ))
        .catch(err => (
            alert('에러 발생')
        ))
    }

    return (
        <div className="storeinputpost">
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>
                <div className="infoTable header">
                    <div>항목</div><div>내용</div>
                </div>

                <div className="storeInfoTable">
                    <div>매장코드</div>
                    <input
                        name="restaurantCode"
                        value={restaurantCode}
                        placeholder="음식점 이름"
                        disabled={true}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>음식분류</div>
                    <select 
                        style={{border:'none', outline:'none', background:'lightblue', borderRadius:'5px'}}
                        name="categoryCode"
                        value={categoryCode}
                        placeholder="음식종류"
                        onChange={onChange}
                        defaultValue="choose"
                    >
                        <option value="choose" disabled={true}>선택</option>
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

                <div className="storeInfoTable">
                    <div>메뉴이름</div>
                    <input
                        name="foodName"
                        value={foodName}
                        placeholder="불닭볶음면"
                        onChange={onChange}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>음식설명</div>
                    <input
                        name="foodDescription"
                        value={foodDescription}
                        placeholder="예) xx과 xx의 조합"
                        onChange={onChange}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>가격</div>
                    <input
                        name="foodPrice"
                        value={foodPrice}
                        placeholder="예) 25000"
                        onChange={onChange}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>음식사진</div>
                    <input
                        name="foodPhoto"
                        value={foodPhoto}
                        onChange={onChange}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>판매여부</div>
                    <input
                        name="isAvailable"
                        value={isAvailable}
                        placeholder=""
                        onChange={onChange}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>할인여부</div>
                    <input
                        name="isOnPromo"
                        value={isOnPromo}
                        placeholder=""
                        onChange={onChange}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>인기메뉴</div>
                    <input
                        name="mostSold"
                        value={mostSold}
                        placeholder=""
                        onChange={onChange}
                    />
                </div>

                <div className="storeInfoTable">
                    <div>신메뉴</div>
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
                        onChange={onChange}
                    /></label>
                </div>
                <button>입력</button>
            </form>
        </div>
    )
}

export default React.memo(RegMenuPost);
