import { GET_FOODLIST, GET_CURRENT_STORE_FOODLIST, ADD_FOOD, DELETE_FOODMENU, EDIT_FOOD } from '../actions/actionTypes'
import * as api from '../api/menuApi'

export const getFoodList = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFoodList(id);
        dispatch({ type: GET_FOODLIST, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentStoreFoodList = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchCurrentStoreFoodList(id);
        dispatch({ type: GET_CURRENT_STORE_FOODLIST, payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const addFood = (newMenu) => async (dispatch) => {
    try {
        const { data } = await api.addFood(newMenu)
        dispatch({ type: ADD_FOOD, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteFoodMenu = (id) => async (dispatch) => {
    try {
        await api.deleteFoodMenu(id)
        dispatch({ type: DELETE_FOODMENU, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const editFood = (id, editedMenu) => async (dispatch) => {
    try {
        const { data } = await api.editFood(id, editedMenu);
        dispatch({ type: EDIT_FOOD, payload: data})
    } catch (error) {
        
    }
}