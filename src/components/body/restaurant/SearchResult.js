import React from 'react'
import { useSelector } from 'react-redux'

const SearchResult = (props) => {
    const result = useSelector((state) => state.restaurant)
    return (
        <div>
            입력하신 "{props.match.params.keyword}"의 조회결과입니다. <br/>
            총 {result.length}건이 검색되었습니다.
            {result.map((c) => (
                <div> {c.restaurantName} </div>
            ))}
        </div>
    )
}

export default SearchResult
