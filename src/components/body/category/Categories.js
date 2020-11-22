import React from 'react'
import { useSelector } from 'react-redux'
import Category from './category/Category'

const Categories = () => {
    const categories = useSelector((state) => state.category)

    return (
        <div>
            <div style={{display: 'flex', justifyContent:'center',  width: '100%'}}>
            </div>
            <div className="body">
                <div className="body_container">
                    <div className="body_menu_wrap">
                        {categories.length ? categories.map(list => (
                            <Category key={list._id} list={list} />
                        )) : "로딩중"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories