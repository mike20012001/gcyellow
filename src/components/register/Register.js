import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="registerwrap">
            <div style={{display: 'flex', justifyContent:'space-between', padding: '0', fontSize:'0.8rem', lineHeight:'2rem'}}>
                <ul style={{display: 'flex', paddingLeft: '20px'}}>
                    <li><Link to='/register/store/'>매장 검색</Link></li>
                    <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li><a href='/register/store/post'>등록</a></li>
                </ul>
                <ul style={{display: 'flex', paddingRight: '20px'}}>
                    <li><Link to='/register/menu/'>메뉴 검색</Link></li>
                    <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li><Link to='/register/menu/post'>등록</Link></li>
                </ul>
            </div>
            <hr style={{border: 'none', borderTop: '1px solid gray'}}/>
        </div>
    )
}

export default Register
