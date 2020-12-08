import { combineReducers } from 'redux'

import auth from './auth'
import error from './error'
import menu from './menu'
import category from './category'
import restaurant from './restaurant'

export default combineReducers({
    category,
    restaurant,
    menu,
    auth,
    error
})