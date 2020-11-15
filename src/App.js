import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategory } from './actions/categoryActions'
import Navigation from './components/nav/Navigation';
import DeliveryLocation from './components/body/location/deliveryLocation';
import Register from './components/register/Register';
import RegStore from './components/register/Store/RegStore';
import RegStorePost from './components/register/Store/RegStorePost';
import RegMenuForm from './components/register/Menu/RegMenuForm';
import RegMenuPost from './components/register/Menu/RegMenuPost';

import './App.css'

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
            <Switch>
                <Route exact path='/register/store' component={RegStore} />
                <Route exact path='/register/store/post/' component={RegStorePost} />
                <Route exact path='/register/store/post/:id' component={RegStorePost} />
                <Route exact path='/register/menu' component={RegMenuForm} />
                <Route exact path='/register/menu/post' component={RegMenuPost} />

                <Route exact path='/' component={DeliveryLocation} category={category} setCategory={setCategory} />
            </Switch>
        </Router>
        </div>
    )
}

export default App; 