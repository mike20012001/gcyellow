import axios from '../utils/axios'

export const fetchAllRestaurants = () => axios.get(`/r/restaurant/`)
export const fetchRestaurant = (id) => axios.get(`/r/restaurant/${id}`) // category
export const fetchRestaurantByCode = (code) => axios.post(`/r/restaurant/${code}`) // 공갈..
export const fetchFilteredRestaurants = (id) => axios.post(`/r/restaurant/register/store/${id.searchKey}`, {id})
export const fetchFilteredRestaurantsByTag = (id) => axios.post(`/r/restaurant/search/tag`, {id})
export const updateRestaurant = (id, updatedData, config) => axios.patch(`/r/restaurant/register/${id}`, updatedData, config)
export const registerRestaurant = (registerData, config) => axios.post(`/r/restaurant/register/`, registerData, config)
export const fetchDetail = (id) => axios.get(`/r/restaurant/${id.id}/${id.code}`)
export const updateCloseStatus = (id, updatedData, config) => axios.patch(`/r/restaurant/closestatus/${id}`, updatedData, config)

export const deleteRestaurant = (id, config) => axios.delete(`/r/restaurant/register/${id}`, config)

