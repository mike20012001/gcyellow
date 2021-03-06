import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="navigationbar_top" style={{maxWidth: '1024px', width:'100%'}}>
            <div className="navigationbar" style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div className="navigationbar" style={{display:'flex', justifyContent: 'center', width:'150px', alignItems:"center"}}>
                    <Link to="/"><p className="logoText" style={{color:"white", display:'inline', fontSize:'14px'}}>김천</p></Link>
                </div>
                <div className="navigationbar" style={{display:'flex', justifyContent:'space-around', width:'60%', alignItems:"center"}}>
                    <Link to='/'><i style={{fontSize:'1.2rem', color:'#333333'}}>F</i>OOD</Link>
                    <Link to='/'><i style={{fontSize:'1.2rem', color:'#333333'}}>C</i>AFE (준비중)</Link>
                    <input 
                    style={{outline:"none"}}
                    />
                    <Link to='/register/store'><i style={{fontSize:'1.2rem', color:'#333333'}}>등록</i></Link>
                </div>
            </div>
        </div>
    )
}


export default Navbar
