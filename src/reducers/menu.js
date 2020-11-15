import { GET_FOODLIST } from '../actions/actionTypes'

const menu = (foodlist = [], action) => {
    switch (action.type) {
        case GET_FOODLIST:
            return action.payload;
        default:
            return { ...foodlist}
    }
}

export default menu;