import React from 'react'
import mainImg from '../../../img/mainImg/main.jpg'

const SearchbarArea = () => {
    return (
        <div style={{height:'150px', margin:'0 5px 15px 5px', padding:'2px 0'}}>
            <img src={mainImg} alt="" style={{height:'150px', width:'100%', objectFit:'cover'}}/>
        </div>
    )
}

export default SearchbarArea
