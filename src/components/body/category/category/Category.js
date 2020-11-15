import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ list }) => {
    return (
        <div>
            <div className="body">
                <div className="body_container">
                    <div className="body_menu_wrap">
                        {!list.length ? 
                            <Link to={`/restaurant/${list.categoryCode.toString()}`} key={list.categoryCode} >
                                <div className='body_menu_category'><img src={list.thumbnail} alt="category"></img>
                                <p className="category_name">{list.foodCategory}</p></div></Link>
                         : "로딩중"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
