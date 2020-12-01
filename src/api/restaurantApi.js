import axios from '../utils/axios'

export const fetchAllRestaurants = () => axios.get(`/r/restaurant/`)
export const fetchRestaurant = (id) => axios.get(`/r/restaurant/${id}`)
export const fetchRestaurantByCode = (code) => axios.post(`/r/restaurant/${code}`)
export const fetchFilteredRestaurants = (id) => axios.post(`/r/restaurant/register/store/${id.searchKey}`, {id})
export const updateRestaurant = (id, updatedData) => axios.patch(`/r/restaurant/register/${id}`, {updatedData})
export const registerRestaurant = (registerData) => axios.post(`/r/restaurant/register/`, {registerData})
export const fetchDetail = (id) => axios.get(`/r/restaurant/${id.id}/${id.code}`)

export const deleteRestaurant = (id) => axios.delete(`/r/restaurant/register/${id}`)

