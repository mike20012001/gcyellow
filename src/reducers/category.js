import { ALL_CATEGORY } from '../actions/actionTypes'

const category = (category = [], action) => {
    switch (action.type) {
        case ALL_CATEGORY:
            return action.payload;
        default:
            return category;
    }
}

export default category;