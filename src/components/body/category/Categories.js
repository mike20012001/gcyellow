import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Category from './category/Category'

const Categories = ({ setCategory }) => {
    const categories = useSelector((state) => state.category)

    return (
        <div className="body">
            <div className="body_container">
                <div className="body_menu_wrap">
                    {categories.length ? categories.map(list => (
                        <Category key={list._id} list={list} setCategory={setCategory} />
                    )) : "로딩중"}
                </div>
            </div>
        </div>
    )
}

export default Categories