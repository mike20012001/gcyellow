import React from 'react'

const Sidemenu = ({ menuInfo }) => {
    return (
        
        <div>
            {menuInfo ?
                menuInfo.sideMenu.map((item, index) => (
                        <ul key={index} style={{marginTop:'5px', background:'gray'}}>
                            <p style={{padding:'10px 15px', fontSize:'13px'}}>{item.groupTitle}</p>
                            <li style={{marginTop:'5px', background:'lightgray', fontSize:'12px', color:'#333333'}}>
                            {item.sideMenu.map(inSideMenu => {
                                return (
                                <div key={inSideMenu._id}>
                                    <p style={{padding:'5px 30px'}}>대 제목 : {inSideMenu.foodNameNonFranchise}</p>
                                    <p style={{padding:'0px 30px', fontSize:'11px', color:'#888'}}>{inSideMenu.foodDescNonFranchise}</p>
                                    <p style={{padding:'0px 30px', fontSize:'11px', color:'#888'}}>{inSideMenu.foodPhotoNonFranchise}</p>
                                    <p style={{padding:'0px 30px', fontSize:'11px', color:'#888'}}>{inSideMenu.foodDifferBySize}</p>
                                    <p style={{padding:'0px 30px', fontSize:'11px', color:'#888'}}>{inSideMenu.foodPrice}</p>
                                </div>
                                )

                            })
                            }
                        </li>
                    </ul>
                )
                )
            : ""}
        </div>
    )
}

export default Sidemenu
