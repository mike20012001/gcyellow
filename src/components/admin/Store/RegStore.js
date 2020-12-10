import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredRestaurants, deleteRestaurant } from '../../../actions/restaurantActions'

const RegStore = ({currentId, setCurrentId}) => {
    const dispatch = useDispatch();
    const filteredRestaurants = useSelector((state) => state.restaurant)

    const [ keyword, setKeyword ] = useState({
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
        <div style={{marginBottom:'5rem', borderBottom:'1px solid gray'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>

                <div>매장검색</div>
                <form onSubmit={onSubmit}>
                    <select name="searchKey" onChange={onChange} defaultValue="choose" style={{width:'100px'}}>
                        <option disabled={true} value="choose">선택</option>
                        <option value="restaurantName">상호검색</option>
                        <option value="restaurantCode">코드검색</option>
                        <option value="restaurantAddress">매장위치</option>
                        <option value="restaurantCategory">음식종류</option>
                    </select>
                    
                    <input
                        style={{width:'30%', height:'22px'}}
                        type="text"
                        name="searchValue"
                        value={searchValue}
                        onChange={onChange}
                    />
                    <button>검색</button>
                <hr style={{border: 'none', borderTop: '1px solid gray'}}/>
                </form>

                {/*--------검색결과--------*/}
                {filteredRestaurants.length > -1 ? <div style={{padding:'0 1rem', textAlign:'center'}}>
                <p style={{fontSize:'1rem', fontWeight:'bold', color:'red', margin:'0.5rem'}}>
                    검색결과 - {filteredRestaurants.length > -1 ? filteredRestaurants.length : 0}건</p>

                    <table className="searchresult" style={{width: '100%', fontSize:'0.7rem', letterSpacing:'0'}}>
                        <thead>
                            <tr>
                                <th>고유코드</th><th>매장명</th><th>thumb</th><th>flyer</th><th>연동</th><th>종류</th><th>매장주소</th><th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRestaurants.length > -1 ? filteredRestaurants.map(result => (
                                <tr key={result._id}>
                                    <td onClick={() => setCurrentId(result._id)} style={{fontWeight:'bold'}}><Link className="searchResult" to={`/register/store/post/${result.restaurantCode}`}>
                                    {result.restaurantCode}</Link></td>
                                    <td style={{textAlign:'left'}}>{result.restaurantName}</td>
                                    {result.restaurantThumbnail.length > 100 ? <td>있음</td> : <td style={{fontWeight:'bold', background:'red', color:'white'}}>없음</td>}
                                    {result.restaurantFlyer.length > 100 ? <td>있음</td> : <td style={{fontWeight:'bold', background:'red', color:'white'}}>없음</td>}
                                    {result.restaurantOwner ? <td>O</td> : <td>X</td>}
                                    <td style={{fontWeight:'bold'}}>{result.restaurantCategory}</td>
                                    <td style={{textAlign:'left'}}>{result.restaurantAddress}</td>
                                    {/* <td>{(result.restaurantReview) > -1 ? (result.restaurantReview).length : ""}개</td> */}
                                    <td><button onClick={() => dispatch(deleteRestaurant(result._id))}>X</button></td>
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
