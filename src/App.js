import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategory } from './actions/categoryActions'
import Navigation from './components/nav/Navigation';
import DeliveryLocation from './components/body/location/deliveryLocation';
import Register from './components/register/Register';
import RegStore from './components/register/Store/RegStore';
import RegStorePost from './components/register/Store/RegStorePost';
import RegMenu from './components/register/Menu/RegMenu';
import RegMenuPost from './components/register/Menu/RegMenuPost';

import './App.css'
import Categories from './components/body/category/Categories';
import Restaurants from './components/body/restaurant/Restaurants';
import Menu from './components/body/menu/Menu';

const App = () => {
    const [ category, setCategory ] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [category, dispatch])

        return ( 
            <div className="App">
            <Router>
                <Navigation />
                <Route path='/register' component={Register} />
                <Route path='/' component={DeliveryLocation} category={category} setCategory={setCategory} />
            <Switch>
                <Route exact path='/' component={Categories} />
                <Route exact path="/restaurant/:id" component={Restaurants} />
                <Route path ='/restaurant/:id/:code' component={Menu} />

                <Route exact path='/register/store' component={RegStore} />
                <Route exact path='/register/store/post/' component={RegStorePost} />
                <Route exact path='/register/store/post/:id' component={RegStorePost} />
                <Route exact path='/register/menu' component={RegMenu} />
                <Route exact path='/register/menu/post' component={RegMenuPost} />
                <Route path='/register/menu/post/:id' component={RegMenuPost} />
            </Switch>
        </Router>
        </div>
    )
}

export default App; 