import { GET_CURRENT_STORE_FOODLIST, GET_FOODLIST, ADD_FOOD, DELETE_FOODMENU, EDIT_FOOD } from '../actions/actionTypes'

const menu = (foodlist = [], action) => {
    switch (action.type) {
        case ADD_FOOD:
            return action.payload;

        case EDIT_FOOD:
            return foodlist.map((menu) => menu._id === action.payload._id ? action.payload : menu)

        case GET_FOODLIST:
            return action.payload;

        case DELETE_FOODMENU:
            return foodlist.filter((menu) => menu._id !== action.payload)

        case GET_CURRENT_STORE_FOODLIST:
            return action.payload;

        default:
            return { ...foodlist}
    }
}

export default menu;
