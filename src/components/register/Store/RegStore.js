import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFilteredRestaurants } from '../../../actions/restaurantActions'
import { useDispatch, useSelector } from 'react-redux'

const RegStore = () => {
    const dispatch = useDispatch();
    const aa = useSelector((state) => state.restaurant)
    const [ keyword, setKeyword] = useState({
        searchKey: '',
        searchValue: ''
    })
    
    const { searchValue } = keyword;
    
    const onChange = (e) => {
        setKeyword({
            ...keyword, [e.target.name]: e.target.value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (keyword.searchKey === "") {
            alert('검색항목 선택')
            return;
        } else {
            dispatch(getFilteredRestaurants(keyword))
            }
        } 

            return (
                <div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>

                <div>매장검색</div>
                <form onSubmit={onSubmit}>
                    <select name="searchKey" onChange={onChange} defaultValue="choose" style={{width:'100px'}}>
                        <option disabled={true} value="choose">선택</option>
                        <option value="restaurantName">상호검색</option>
                        <option value="restaurantCode">코드검색</option>
                        <option value="restaurantOwner">대표검색</option>
                        <option value="restaurantAddress">매장위치</option>
                        <option value="restaurantCategory">음식종류</option>
                        <option value="restaurantReview">리뷰숫자</option>
                        <option value="restaurantLocalcurrency">상품권사용</option>
                    </select>
                    
                    <input
                        style={{width:'30%'}}
                        type="text"
                        name="searchValue"
                        value={searchValue}
                        onChange={onChange}
                    />
                    <button>검색</button>
                </form>

                {/*--------검색결과--------*/}
                
                {aa !== undefined ? <div style={{padding:'0 1rem', textAlign:'center'}}>
                <p style={{fontSize:'1rem', fontWeight:'bold', color:'red', margin:'0.5rem'}}>
                    "검색결과" - {aa.length > -1 ? aa.length : 0}건</p>

                    <table className="searchresult" style={{width: '100%', fontSize:'0.7rem', letterSpacing:'0'}}>
                        <thead>
                            <tr>
                                <th>코드</th><th>매장명</th><th>대표</th><th>종류</th><th>매장주소</th><th>리뷰</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aa.length > -1 ? aa.map(result => (
                                <tr key={result._id}>
                                    <td><Link className="searchResult" to={`/register/store/post/${result.restaurantCode}`}>
                                    {result.restaurantCode}</Link></td>
                                    <td>{result.restaurantName}</td>
                                    <td>{result.restaurantOwner}</td>
                                    <td>{result.restaurantCategory}</td>
                                    <td>{result.restaurantAddress}</td>
                                    <td>{(result.restaurantReview) > -1 ? (result.restaurantReview).length : ""}개</td>
                                </tr>
                            )) : ""}
                        </tbody>
                    </table>
                </div> : ""}
            </div>
            
        </div>
    )
}

export default RegStore;
