import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllRestaurants } from '../../../actions/restaurantActions'
import { useDispatch, useSelector } from 'react-redux'

const RegStore = () => {
    const searchResult = useSelector((state) => state.restaurant)
    const dispatch = useDispatch();

    const [ isLoaded, setIsLoaded ] = useState(false)
//    const [ searchResult, setSearchResult] = useState({})
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
    // searchResult를 allData로 바꾸고, ssearchResult& setsearchresult 살려서, dispatch전체 목록에서 실시간 검색으로 변경
    const onSubmit = async (e) => {
        e.preventDefault();
        // if (keyword.searchKey === "") {
        //     alert('검색항목 선택')
        //     return;
        // } else {
        //     await axios.post(`/restaurant/${keyword.searchKey}`, keyword)
        //     .then(response => (
        //         setSearchResult(response.data) ||
        //         setIsLoaded(true)
        //         ))
        //         .catch((err) => (
        //             alert('try later again')
        //             ))
        //       }
            }
                
    useEffect(() => {
        dispatch(getAllRestaurants())

    }, [dispatch])

    return (
        <div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.9rem', lineHeight:'2.5rem' }}>

                <div>매장검색</div>
                <form onSubmit={onSubmit}>
                    <select name="searchKey" onChange={onChange} defaultValue="choose" style={{width:'100px'}}>
                        <option disabled={true} value="choose">선택</option>
                        <option value="name">상호검색</option>
                        <option value="code">코드검색</option>
                        <option value="owner">대표검색</option>
                        <option value="address">매장위치</option>
                        <option value="category">음식종류</option>
                        <option value="review">리뷰숫자</option>
                        <option value="localcurrency">상품권사용</option>
                        <option value="showall">전체보기</option>
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
                
                {searchResult.length ? <div style={{padding:'0 1rem', textAlign:'center'}}>
                <p style={{fontSize:'1rem', fontWeight:'bold', color:'red', margin:'0.5rem'}}>
                    "검색결과" - {searchResult ? searchResult.length : 0}건</p>

                    <table className="searchresult" style={{width: '100%', fontSize:'0.7rem', letterSpacing:'0'}}>
                        <thead>
                            <tr>
                                <th>코드</th><th>매장명</th><th>대표</th><th>종류</th><th>매장주소</th><th>리뷰</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResult.length ? searchResult.map(result => (
                                <tr key={result._id}>
                                    <td><Link className="searchResult" to={`/register/store/post/${result.restaurantCode}`}>
                                    {/* <td><Link className="searchResult" to={{pathname:`/register/store/${result.restaurantCode}`, data:{result}}}> */}
                                    {result.restaurantCode}</Link></td>
                                    <td>{result.restaurantName} </td>
                                    <td>{result.owner} </td>
                                    <td>{result.category} </td>
                                    <td>{result.address} </td>
                                    <td>{(result.review).length}개</td>
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
