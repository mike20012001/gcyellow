import { combineReducers } from 'redux'

import category from './category'
import restaurant from './restaurant'
import menu from './menu'

export default combineReducers({
    category,
    restaurant,
    menu,
})