import React, { useState, useEffect } from 'react'
import axios from '../../../utils/axios'
import MenuDetail from './MenuDetail'

function RegMenuForm() {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ menuInfo, setMenuInfo ] = useState({})

    useEffect(() => {
        const getMenuInfo = async () => {
            const response = await axios.get('/register/menu')
            setMenuInfo(response.data)
            setIsLoading(true)
        }
        getMenuInfo()
    }, [])

    return (
        <div>
            {isLoading ? (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', letterSpacing:'2px', textAlign:'center', fontSize:'0.7rem', lineHeight:'2.5rem' }}>
            <div>
                <table className="menuInfoTable" style={{width: '100%', letterSpacing:"0"}}>
                    <thead>
                        <tr>
                            <th>점포</th><th>종류</th><th>이름</th><th>가격</th><th>사진</th><th>리뷰</th><th>할인</th>
                        </tr>
                    </thead>
                    {menuInfo.map(c => (
                        <MenuDetail key={c._id} restaurant={c.restaurant} category={c.foodCategory} name={c.foodName} price={c.foodPrice}
                        photo={c.foodPhoto} review={c.foodReview} promo={c.isOnPromo}
                        />
                    ))}
                    </table>
                </div>
            </div>) : ""}
        </div>
    )
}

export default React.memo(RegMenuForm)
