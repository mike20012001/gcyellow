import { GET_FOODLIST } from '../actions/actionTypes'
import * as api from '../api/menuApi'

export const getFoodList = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFoodList(id);
        dispatch({ type: GET_FOODLIST, payload: data })
    } catch (error) {
        console.log(error)
    }
}