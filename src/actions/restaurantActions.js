import { GET_RESTAURANT, GET_FILTERED_RESTAURANTS, GET_FILTERED_RESTAURANTS_BY_TAG, GET_DETAIL, GET_ALL_RESTAURANTS, UPDATE_RESTAURANT, REGISTER_RESTAURANT, DELETE_RESTAURANT } from '../actions/actionTypes'
import * as api from '../api/restaurantApi'
import { tokenConfig } from './authActions'

export const getRestaurant = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchRestaurant(id);
        dispatch({ type: GET_RESTAURANT, payload: data })
        // dispatch({ type: GET_RESTAURANT, payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const getRestaurantByCode = (code) => async (dispatch) => {
    try {
        const { data } = await api.fetchRestaurantByCode(code);
        dispatch({ type: GET_RESTAURANT, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getFilteredRestaurants = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFilteredRestaurants(id);
        dispatch({ type: GET_FILTERED_RESTAURANTS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getFilteredRestaurantsByTag = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFilteredRestaurantsByTag(id);
        dispatch({ type: GET_FILTERED_RESTAURANTS_BY_TAG, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getDetail = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchDetail(id);
        dispatch({ type: GET_DETAIL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getAllRestaurants = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllRestaurants();
        dispatch({ type: GET_ALL_RESTAURANTS, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const registerRestaurant = (registerData) => async (dispatch, getState) => {
    try {
        const { data } = await api.registerRestaurant(registerData, tokenConfig(getState));
        // console.log('registerRestaurant', data)
        dispatch({ type: REGISTER_RESTAURANT, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateRestaurant = (id, updatedData) => async (dispatch, getState) => {
    try {
        const { data } = await api.updateRestaurant(id, updatedData, tokenConfig(getState));
        // console.log('restaurantAction', data)
        dispatch({ type: UPDATE_RESTAURANT, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateCloseStatus = (id, updatedData) => async (dispatch, getState) => {
    try {
        const { data } = await api.updateCloseStatus(id, updatedData, tokenConfig(getState));
        // console.log('restaurantAction', data)
        dispatch({ type: UPDATE_RESTAURANT, payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const deleteRestaurant = (id) => async (dispatch, getState) => {
    try {
        await api.deleteRestaurant(id, tokenConfig(getState));
        dispatch({ type: DELETE_RESTAURANT, payload: id})
    } catch (error) {
        console.log(error)
    }
}

