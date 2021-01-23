import React from 'react'
import { updateRestaurant } from '../../../../actions/restaurantActions'
import './singlemenu.css'
import SingleMenu from './SingleMenu/SingleMenu'

const Singlemenu = ({ menuInfo, restaurantId, singleMenus, useState, useEffect, dispatch }) => {

    const [ editDisabled, setEditDisabled ] = useState(true)
    
    const [ singleMenuItems, setSingleMenuItems ] = useState({...menuInfo})

    const [ groupTitle, setGroupTitle ] = useState(menuInfo.groupTitle)

    useEffect(() => {
        if(menuInfo) setSingleMenuItems(menuInfo)
        return () => {}
    }, [menuInfo])

    useEffect(() => {
        return () => {}
    }, [])

    const onGroupTitleChange = (e) => {
        setSingleMenuItems(({...singleMenuItems, [e.target.name]: e.target.value}))
        console.log('그룹타이틀', singleMenuItems)
    }

    const onGroupTitleSubmit = (e) => {
        e.preventDefault()
        const body = JSON.stringify(singleMenuItems)
        console.log(body)
        let formData = new FormData();
        formData.append('registerData', body)
        formData.append('file', '')
        console.log(formData)
    
        dispatch(updateRestaurant(restaurantId, formData)).then(res => (
            console.log('response from server', res)
        )).catch (err => console.log(err))
    }

    return (
    
        <div className="owner_menu">
            {singleMenuItems ?
                    <div style={{marginTop:'15px'}} key={singleMenuItems._id}>
                            <div className="group_title" 
                            style={{height:'50px', color:'#fefefe', fontWeight:'600', marginBottom:'10px'}}>
                                <label>그룹명
                                    <button className="edit_button"
                                        onClick={() => {
                                            setEditDisabled(!editDisabled)
                                            setGroupTitle(menuInfo.groupTitle)
                                        }
                                        }>
                                    {editDisabled ? <p style={{color:'#fefefe', fontSize:'12px'}}>수정</p> : <p style={{color:'yellow', fontWeight:'bold', fontSize:'12px'}}>취소</p>}
                                        </button>
                                    </label>
                                    <input 
                                        style={{padding:'7px', fontSize:'13px'}}
                                        name="groupTitle"
                                        defaultValue={menuInfo.groupTitle}
                                        disabled={editDisabled}
                                        value={groupTitle}
                                        onChange={onGroupTitleChange}
                                        />
                                    <button className="edit_button_apply">
                                        {!editDisabled ? <button type="submit" onClick={onGroupTitleSubmit}>적용</button> : ""}
                                    </button>
                                </div>
                                {singleMenus ? singleMenus.map(c => (
                                    <div key={c._id}>
                                    <SingleMenu inSingleMenu={c} useState={useState} editDisabled={editDisabled} setEditDisabled={setEditDisabled} useEffect={useEffect} /> 
                                    </div>
                                )
                                ): "로딩"}
                        </div>

                // )
            //     )
            : "Loading.."}
        </div>
    )
}

export default React.memo(Singlemenu)