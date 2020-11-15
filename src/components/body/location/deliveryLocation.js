import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from '../category/Categories'
import Restaurants from '../restaurant/Restaurants';
import '../../nav/styles/styles.css'
import Menu from '../menu/Menu';

function DeliveryLocation() {

    return (
        <div>
            <div>
                <div className="Navbar_bottom">배달장소
                    <select
                        style={{width:'100px', border:'none', outline:'none'}}
                        name="deliverTo"
                        >
                            <option value="감호동">감호동</option>
                            <option value="교동">교동</option>
                            <option value="남산동">남산동</option>
                            <option value="다수동">다수동</option>
                            <option value="대광동">대광동</option>
                            <option value="덕곡동">덕곡동</option>
                            <option value="모암동">모암동</option>
                            <option value="문당동">문당동</option>
                            <option value="백옥동">백옥동</option>
                            <option value="부곡동">부곡동</option>
                            <option value="삼락동">삼락동</option>
                            <option value="성내동">성내동</option>
                            <option value="신음동">신음동</option>
                            <option value="양천동">양천동</option>
                            <option value="용두동">용두동</option>
                            <option value="율곡동">율곡동</option>
                            <option value="응명동">응명동</option>
                            <option value="지좌동">지좌동</option>
                            <option value="평화동">평화동</option>
                            <option value="황금동">황금동</option>
                    </select>
                </div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Categories} />
                        <Route exact path="/restaurant/:id" component={Restaurants} />
                        <Route path ='/restaurant/:id/:code' component={Menu} />
                    </Switch>
                </Router>
            </div>
            </div>
   
    )
}

export default DeliveryLocation
