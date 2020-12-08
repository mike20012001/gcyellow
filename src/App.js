import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategory } from './actions/categoryActions'
import Navigation from './components/nav/Navigation';
import MainSearchBar from './components/body/searchbar/MainSearchbar';
import RegStore from './components/admin/Store/RegStore';
import RegStorePost from './components/admin/Store/RegStorePost';
import RegMenu from './components/admin/Store/Menu/RegMenu';
import RegMenuPost from './components/admin/Store/Menu/RegMenuPost';

import Categories from './components/body/category/Categories';
import Restaurants from './components/body/restaurant/Restaurants';
import Menu from './components/body/menu/Menu';
import GoBack from './components/goBack';
import './App.css'
import { loadUser } from './actions/authActions';
import Register from './components/admin/Register';
import Login from './components/body/auth/Login';
// import AppNavbar from './components/body/nav/Navbar';


const App = () => {
    const dispatch = useDispatch()
    const [ currentId, setCurrentId ] = useState(null)
    
    useEffect( () => {
        dispatch(loadUser());
    })

    useEffect(() => {
        dispatch(getCategory())
    }, [currentId, dispatch])

        return ( 
            <div className="App">
            <Router>
                {/* <AppNavbar /> */}
                <Navigation />
                <Switch>
                    <Route path='/register' component={Register} />
                    <Route path='/' component={MainSearchBar} />
                </Switch>
                <Switch>
                    <Route exact path='/' component={Categories} />
                    <Route exact path="/restaurant/:id" component={Restaurants} />
                    <Route path ='/restaurant/:id/:code' component={Menu} />

                    <Route exact path='/register/store' render={(props) => <RegStore {...props} currentId={currentId} setCurrentId={setCurrentId} /> } />
                    <Route exact path='/register/store/post/' render={(props) => <RegStorePost {...props} currentId={currentId} setCurrentId={setCurrentId} /> } />
                    <Route exact path='/register/store/post/:id' render={(props) => <RegStorePost {...props} currentId={currentId} setCurrentId={setCurrentId} /> } />
                    <Route exact path='/register/menu' component={RegMenu} currentId={currentId} setCurrentId={setCurrentId} />
                    <Route exact path='/register/menu/post' component={RegMenuPost} currentId={currentId} setCurrentId={setCurrentId} />
                    <Route path='/register/menu/post/:id' component={RegMenuPost}  currentId={currentId} setCurrentId={setCurrentId} />
                </Switch>
                <div style={{display: 'flex', justifyContent:'flex-end',maxWidth: '1024px', width:'97%', position:'fixed', bottom:'0', margin: '0 1rem 0.5rem 0'}}>
                <GoBack />
                </div>

        </Router>
        </div>
    )
}

export default App; 