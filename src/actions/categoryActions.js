import { ALL_CATEGORY } from '../actions/actionTypes'
import * as api from '../api/categoryApi'

export const getCategory = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCategory();
        dispatch({ type: ALL_CATEGORY, payload: data })
    } catch (error) {
        console.log(error)
    }
}