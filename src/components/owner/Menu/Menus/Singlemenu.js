import React from 'react'
import './singlemenu.css'
import SingleMenu from './SingleMenu/SingleMenu'

const Singlemenu = ({ menuInfo, singleMenus, useState, useEffect}) => {

    const [ singleMenuItems, setSingleMenuItems ] = useState({})

    const [ editDisabled, setEditDisabled ] = useState(true)
 
    const { groupTitle } = singleMenuItems

    
    useEffect(() => {
        if(menuInfo) setSingleMenuItems(menuInfo)
        return () => {}
    }, [menuInfo])

    useEffect(() => {
        return () => {}
    }, [])

// console.log(singleMenus)

    return (
    
        <div className="owner_menu">
            <button onClick={() => setEditDisabled(!editDisabled)}>수정하기</button>
            {singleMenuItems ?
                    <div style={{marginTop:'15px'}} key={singleMenuItems._id}>
                            <div className="group_title" 
                            style={{height:'50px', color:'#fefefe', fontWeight:'600', marginBottom:'10px'}}>
                                <label>그룹이름</label>
                                    <input 
                                        style={{padding:'7px', fontSize:'13px'}}
                                        defaultValue={groupTitle}
                                        disabled={editDisabled}
                                        value={groupTitle}
                                        />
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
