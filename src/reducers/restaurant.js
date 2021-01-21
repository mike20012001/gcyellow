import { GET_RESTAURANT, GET_FILTERED_RESTAURANTS, GET_DETAIL, GET_SELECTED, GET_ALL_RESTAURANTS, UPDATE_RESTAURANT, REGISTER_RESTAURANT, DELETE_RESTAURANT, GET_FILTERED_RESTAURANTS_BY_TAG, UPDATE_CLOSE_STATUS } from '../actions/actionTypes'

const restaurant = (restaurant = [], action) => {
    switch (action.type) {
        case REGISTER_RESTAURANT:
            return [ ...restaurant, action.payload]

        case UPDATE_RESTAURANT:
            return restaurant.map((restaurant) => restaurant._id === action.payload._id ? action.payload : restaurant);

        case UPDATE_CLOSE_STATUS:
            return restaurant.map((restaurant) => restaurant._id === action.payload._id ? action.payload : restaurant);

        case GET_ALL_RESTAURANTS:
            return action.payload;

        case GET_FILTERED_RESTAURANTS:
            return action.payload;

            case GET_FILTERED_RESTAURANTS_BY_TAG:
            return action.payload;

        case GET_RESTAURANT:
            return action.payload;

        case GET_DETAIL:
            return action.payload;

        case GET_SELECTED:
            return restaurant.filter((restaurant) => restaurant._id === action.payload)
    
        case DELETE_RESTAURANT:
            return restaurant.filter((restaurant) => restaurant._id !== action.payload)

        default:
            return restaurant;
    }
}

export default restaurant;