import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles/styles.css'


const Navigation = () => {

    const auth = useSelector((state) => state.auth.user)
    const [ navbar, setNavbar ] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)


    return (
        <div className={navbar ? "navigationbar_top active" : "navigationbar_top"} style={{maxWidth: '1024px', width:'100%'}}>
            <div className="navigationbar" style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div className="navigationbar" style={{display:'flex', justifyContent: 'center', width:'150px', alignItems:"center"}}>
                    <Link to="/"><p className="logoText" style={{color:"#333333", display:'inline', fontSize:'14px'}}>김천</p></Link>
                </div>
                <div className="navigationbar" style={{display:'flex', justifyContent:'space-around', width:'60%', alignItems:"center"}}>
                    {/* <Link to='/'><i style={{fontSize:'1.2rem', color:'#333333'}}>F</i>OOD</Link> */}
                    {/* <Link to='/'><i style={{fontSize:'1.2rem', color:'#333333'}}>C</i>AFE (준비중)</Link> */}
                    <input 
                    style={{outline:"none"}}
                    placeholder="검색어 입력"
                    />
                    {auth.role === 'admin' ? <Link to='/register/store'><i style={{fontSize:'1rem', color:'#333333'}}>등록</i></Link> : ""}
                </div>
            </div>
        </div>
    )
}


export default Navigation;