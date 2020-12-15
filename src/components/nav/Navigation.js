import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles/styles.css'


const Navigation = () => {
    const auth = useSelector((state) => state.auth.user)
    const [ navbar, setNavbar ] = useState(false)
    const [ ModalOpen, SetModalOpen] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    console.log(ModalOpen)

    window.addEventListener('scroll', changeBackground)


    return (
        <div className={navbar ? "navigationbar_top active" : "navigationbar_top"} style={{maxWidth: '1024px', width:'100%'}}>
            <div className="navigationbar" style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div className="navigationbar" style={{display:'flex', justifyContent: 'center', width:'150px', alignItems:"center"}}>
                    <Link to="/"><p className="logoText" style={{color:"#333333", display:'inline', fontSize:'14px'}}>김천시 배달음식점</p></Link>
                </div>
                <div className="navigationbar" style={{display:'flex', justifyContent:'space-around', width:'60%', alignItems:"center"}}>
                    {/* <Link to='/'><i style={{fontSize:'1.2rem', color:'#333333'}}>F</i>OOD</Link> */}
                    {/* <Link to='/'><i style={{fontSize:'1.2rem', color:'#333333'}}>C</i>AFE (준비중)</Link> */}
                    <button className="button is-small is-danger is-outlined" onClick={() => SetModalOpen(true)}>검색하기</button>
                    {auth.role === 'admin' ? <Link to='/register/store'><i style={{fontSize:'1rem', color:'#333333'}}>등록</i></Link> : ""}
                </div>
            </div>

            <div className={ModalOpen ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                    <div className="modal-content is-clipped" style={{display:'flex', justifyContent: 'center', width:'99%', height:'80%'}}>
                        <div>
                            <div style={{fontSize:'1rem', padding:'0 1rem 2rem 1rem'}}>
                                음식점, 음식이름, 위치 등을 입력해보세요
                            </div>
                            <div className="field">
                                <div className="control" style={{display:'flex', justifyContent: 'center'}}>
                                    <input className="input" type="text" placeholder="입력하셈" style={{borderRadius:"0", border:'0', width:'95%', borderBottom:'1px solid black' }}/>
                                </div>
                                <div style={{display:'flex', flexDirection:'column', padding: '10px', margin:'1rem', width:'30%'}}>
                                    <span className="tag is-danger">신음동</span><br/>
                                    <span className="tag is-danger">된장찌개</span><br/>
                                    <span className="tag is-danger">유로코피자</span><br/>
                                    <span className="tag is-danger">민상이네</span>
                                </div>
                            </div>
                        </div>
                    </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => SetModalOpen(false)} style={{zIndex:'999'}}></button>
            </div>

        </div>
    )
}

export default Navigation;