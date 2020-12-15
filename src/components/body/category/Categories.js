import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Category from './category/Category'
import Logout from '../auth/Logout'
import Signup from '../auth/Signup'
import Login from '../auth/Login'

const Categories = () => {
    const categories = useSelector((state) => state.category)

    const auth = useSelector((state) => state.auth)

    const loggedInUser = (
        <div>
            {auth.user.role === "admin" ? <Link to='/register'>메뉴등록</Link> : ""}
            <Logout />
        </div>
    )

    const guest = (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Login />
            <Signup />
            {/* <Link to='/register'><i style={{fontSize:'1.2rem', color:'#333333'}}>L</i>OGIN</Link> */}
        </div>
    )


    return (
        <div>
            <div style={{display: 'flex', justifyContent:'center',  width: '100%'}}>
            </div>
            <div className="body">
                <div className="body_container">
                    <div className="body_menu_wrap">
                        {categories.length ? categories.map(list => (
                            <Category key={list._id} list={list} />
                        )) : <progress className="progress is-medium is-info" max="100" />}
                    </div>
                </div>
            </div>
                <hr />
            <div className="ft" style={{display:'flex', position: 'relative', justifyContent:'space-around', alignItems:'center', fontSize:'0.7rem'}}>
                <div style={{zIndex:'9999', textAlign:'left'}}>
                {auth && auth.isAuthenticated ? loggedInUser : guest}
                </div>
                <div style={{textAlign:'left'}}>
                    문의<br/>
                    scheme.mike@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Categories