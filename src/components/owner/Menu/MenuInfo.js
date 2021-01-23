import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Beverage from './Menus/Beverage';
import Seasonalmenu from './Menus/Seasonalmenu';
// import Setmenu from './Menus/Setmenu';
import Sidemenu from './Menus/Sidemenu';
import Singlemenu from './Menus/Singlemenu';


const MenuInfo = () => {
    const dispatch = useDispatch();

    // const restaurantId = useSelector((state) => state.auth.user.restaurant )
    const menuInfo = useSelector((state) => state.restaurant[0])
    const restaurantId = useSelector((state) => state.auth.user.restaurant)



    // useEffect(() => {
    //     // dispatch해서 menu에 있는 restaurantId를 검색후 가지고 옴. 혹은 franchise는 restaurant code 혹은 id를 가지고 옴.
    //     dispatch(getFoodList(restaurantId))
    //     return () => {}
    // }, [dispatch, restaurantId])

    // useEffect(() => {
    //     return () => {}
    // }, [])

    // console.log(menuInfo)
    // console.log('키 찾기', menuInfo.singleMenu)

    return (
        <div style={{width: '90%', margin:'70px auto', zIndex:'9999', fontSize:'14px'}}>
            {/* 메뉴정보<br/>
            <p style={{textAlign:'center', fontSize:'18px', marginTop:'20px'}}>세트메뉴</p>

                <Setmenu menuInfo={menuInfo} dispatch={dispatch} useEffect={useEffect} useState={useState} useSelector={useSelector} />
     */}
            <p style={{textAlign:'center', fontSize:'18px', marginTop:'40px'}}>단품메뉴</p>
            {menuInfo.singleMenu.map(c => (
                <div key={c._id}>
                <Singlemenu menuInfo={c} singleMenus={c.singleMenu} restaurantId={restaurantId} dispatch={dispatch} useEffect={useEffect} useState={useState}/>
                </div>
                )
                )}
                

            <p style={{textAlign:'center', fontSize:'18px', marginTop:'40px'}}>계절메뉴</p>
                <Seasonalmenu menuInfo={menuInfo} dispatch={dispatch} useEffect={useEffect} useState={useState}/>

            <p style={{textAlign:'center', fontSize:'18px', marginTop:'40px'}}>사이드메뉴</p>
                <Sidemenu menuInfo={menuInfo} dispatch={dispatch} useEffect={useEffect} useState={useState}/>

            <p style={{textAlign:'center', fontSize:'18px', marginTop:'40px'}}>음료</p>
                <Beverage menuInfo={menuInfo} dispatch={dispatch} useEffect={useEffect} useState={useState}/>

        </div>
    )
}

export default React.memo(MenuInfo);
