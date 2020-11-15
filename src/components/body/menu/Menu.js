import React, { useEffect } from 'react'
import { getFoodList } from '../../../actions/menuActions'
import { useDispatch, useSelector } from 'react-redux'
import Submenu from '../restaurant/restaurant/Submenu'

const Menu = (props) => {
    const dispatch = useDispatch()
    const foodList = useSelector((state) => state.menu) // 메뉴
    const restaurantInfo = useSelector((state) => state.restaurant) // 레스토랑
    const filtered = restaurantInfo.filter((c) =>  c.restaurantCode === props.match.params.code) 
    const params = props.match.params

    useEffect(() => {
        dispatch(getFoodList(params))
    }, [params, dispatch])

    return (
        <div>
            <Submenu />
            <div>
                <div style={{textAlign:'center', fontSize:"1.3rem", marginTop:'1rem'}}>
                    {filtered.map( (c) => (
                        <div key={c._id}> {c.restaurantName} </div>))}
                </div>
                <div style={{border: '1px solid black', margin:'0 auto'}}>
                {foodList.length ? foodList.map((c) => (
                    <div key={c._id}>
                    <h1>{c.foodName}</h1>
                    <h1>{c.foodPrice}</h1>
                    </div>
                 )) : ""}
                </div>
            </div>
        </div>
    )
}

export default Menu
