import React from 'react'
import './styles/styles.css';

const Navigation = () => {
    return (
        <div>
            <div className="Navbar_top">
                <div className="Navbar_mid">
                    <div className="Navbar_menu">
                        <a href="/">GC Page</a>
                    </div>
                    <div className="Navbar_menu">
                        <a href='/register'>등록메뉴</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation


