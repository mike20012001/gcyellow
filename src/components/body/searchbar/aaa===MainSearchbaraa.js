import React, { useState } from 'react'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Categories from '../category/Categories'
//import Restaurants from '../restaurant/Restaurants';
//import Menu from '../menu/Menu';
import '../../nav/styles/styles.css'

function MainSearchBar() {
    const [ values, setValues ] = useState({
        searchOption: '',
        searchKeyword: ''
    })
    
    const { searchOption, searchKeyword } = values

    

    return (
        <div>
            <div>
                <div className="navbar_bottom">
                    <select
                        style={{width:'100px', border:'1px solid red', outline:'none', background:'#FEFEFE', borderRadius:'3px', marginRight:'5px'}}
                        name="searchOption"
                        value={searchOption}
                        onChange={(e) => setValues({...values, searchOption: e.target.value})}
                        >
                            <option value="showAll">전체보기</option>
                            <option value="restaurant">음식점</option>
                            <option value="address">동이름</option>
                            <option value="giftcard">상품권</option>
                            <option value="foodname">음식명</option>
                    </select>
                    <input
                    style={{borderRadius:'3px', border: '1px solid red', outline:'none', padding:'5px', marginRight:'5px'}}
                        name="searchKeyword"
                        value={searchKeyword}
                        onChange={(e) => setValues({...values, searchKeyword: e.target.value})}
                    />
                </div>
                {/* <Router>
                    <Switch>
                    <Route exact path="/" component={Categories} />
                    <Route exact path="/restaurant/:id" component={Restaurants} />
                    <Route path ='/restaurant/:id/:code' component={Menu} />
                    </Switch>
                </Router> */}
            </div>
                <div className="_blank"></div>
            </div>
   
    )
}

export default MainSearchBar
