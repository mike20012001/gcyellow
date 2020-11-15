import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Submenu = () => {
    const category = useSelector((state) => state.category)

    return (
        <div style={{margin: '10px 0', background:'white', padding: '5px 0'}}>
            <div style={{display:'flex', justifyContent:'space-around', margin:'5px auto', border: '1px solid gray'}}>
                {category.map((c) => (
                    <Link to={`/restaurant/${c.categoryCode}`} key={c._id}><li className="submenu">{c.foodCategory}</li></Link>
                ))}
            </div>
        </div>
    )
}
export default Submenu
