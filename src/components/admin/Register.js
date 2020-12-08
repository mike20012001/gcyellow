import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Register = () => {
    const auth = useSelector((state) => state.auth)
    
    useEffect(() => {
    if(!auth.token) {
        window.location.replace('/')
        alert('접근권한 없음')
    } 
})

    return (
        <div className="registerwrap">
        {auth.token ? 
            <div style={{display: 'flex', justifyContent:'space-between', padding: '0', fontSize:'0.8rem', lineHeight:'2rem'}}>
                <ul style={{display: 'flex', paddingLeft: '20px'}}>
                    <li><Link to='/register/store/'>매장 검색/수정</Link></li>
                    <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li><a href='/register/store/post'>등록</a></li>
                    <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li><a href='/register/store/post'>대표자 검색/수정</a></li>
                </ul>
                {/* <ul style={{display: 'flex', paddingRight: '20px'}}>
                    <li><Link to='/register/menu/'>메뉴 검색</Link></li>
                    <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li><Link to='/register/menu/post'>등록</Link></li>
                </ul> */}
            </div>
            : ""}
            <hr style={{border: 'none', borderTop: '1px solid gray'}}/>
            </div>
    )
}

export default Register
