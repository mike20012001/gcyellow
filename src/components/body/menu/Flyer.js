import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Flyer = ({ filtered }) => {
    const history = useHistory()
    // console.log(filtered)
    useEffect(() => {    
        if(filtered.length <= 0 ) {
            alert('다시 시도해주세요.')
            history.push('/')
        } 
    }, [history, filtered.length])

    return (
        <div>

            {filtered.length > 0 ? 
                filtered.restaurantFlyer !== null ?
                     <img src={`https://mirzas.tk/${filtered[0].restaurantFlyer}`} alt="flyer" width="100%" /> : 
                     <p style={{textAlign:'center', fontSize:'12px', color:'red', fontWeight:'bolder', padding:'30px 0'}}> 전단지 입력이 되지 않았습니다.</p>
            : ""}
        </div>
    )
}

export default React.memo(Flyer)
