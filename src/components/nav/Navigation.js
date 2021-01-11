import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getFilteredRestaurantsByTag} from '../../actions/restaurantActions'
import { Link, useHistory } from 'react-router-dom'
import './styles/styles.css'


const Navigation = () => {
    const history = useHistory();
    const searchInput = useRef();
    const auth = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();
    const [ navbar, setNavbar ] = useState(false)
    const [ ModalOpen, setModalOpen] = useState(false)
    const [ keyword, setKeyword ] = useState('')
    
    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    
    const onChange = (e) => {
        setKeyword({
            ...keyword, [e.target.name]: e.target.value
        })
        //  console.log(keyword)
    }
    
    const clear = () => {
        let resetField = document.getElementsByClassName('control')[0]
        resetField.reset();
        searchInput.current.focus()
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if (keyword === "") {
            alert('검색어를 입력하세요!')
            return;
        } else {
            dispatch(getFilteredRestaurantsByTag(keyword))
            setModalOpen(false)
            history.push(`/searchresult/${keyword.keyword}`)
        }
    } 
    

    return (
        <div className={navbar ? "navigationbar_top active" : "navigationbar_top"} style={{maxWidth: '1024px', width:'100%'}}>
            <div className="navigationbar" style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div className="navigationbar" style={{display:'flex', justifyContent: 'center', width:'150px', alignItems:"center"}}>
                    <Link to="/"><p className="logoText" style={{color:"#333333", display:'inline', fontSize:'16px'}}>김천시<br/>배달음식점</p></Link>
                </div>
                <div className="navigationbar" style={{display:'flex', justifyContent:'space-around', width:'60%', alignItems:"center"}}>
                    <button className="button is-small is-danger is-outlined" onClick={() => setModalOpen(true)}>검색하기</button>
                    {auth.role === 'admin' ? <Link to='/register/store'><i style={{fontSize:'1rem', color:'#333333'}}>등록</i></Link> : ""}
                </div>
            </div>

        {/* ---------------Navigation bar 메뉴 검색창------------------ */}
            <div className={ModalOpen ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                    <div className="modal-content is-clipped" style={{display:'flex', justifyContent: 'center', width:'99%', height:'80%'}}>
                        <div>
                            <div style={{fontSize:'1rem', padding:'0 1rem 2rem 1rem'}}>
                                음식점, 음식이름, 동네이름 등을 입력해보세요
                            </div>
                            
                            <div className="field">
                                <form className="control" style={{display:'flex', justifyContent: 'center'}} onSubmit={onSubmit}>
                                    <input
                                    className="input" 
                                    type="text"
                                    name='keyword'
                                    placeholder="여기에 입력하세요!" 
                                    ref={searchInput}
                                    style={{borderRadius:"0", border:'0', width:'90%', borderBottom:'1px solid black' }}
                                    onChange={onChange}
                                    />
                                <div onClick={clear} style={{fontSize:'1.6rem', color:'red'}}><i className="fas fa-times-circle"></i></div>
                                </form>
                                <div style={{display:'flex', flexDirection:'column', padding: '10px', margin:'1rem', width:'30%'}}>
                                    <span className="tag is-danger">족발</span><br/>
                                    <span className="tag is-danger">신음동</span><br/>
                                    <span className="tag is-danger">짜장면</span><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => setModalOpen(false)}></button>
            </div>
        {/* ---------------Navigation bar 메뉴 모달내 검색창------------------ */}

        </div>
    )
}

export default React.memo(Navigation);