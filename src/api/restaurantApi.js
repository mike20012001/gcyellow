import axios from '../utils/axios'

export const fetchAllRestaurants = () => axios.get(`/restaurant/`)
export const fetchRestaurant = (id) => axios.get(`/restaurant/${id}`)
export const fetchFilteredRestaurants = (id) => axios.post(`/restaurant/register/store/${id.searchKey}`, {id})
export const updateRestaurant = (id, updatedData) => axios.patch(`/restaurant/register/store/post/${id}`, {updatedData})
export const registerRestaurant = (registerData) => axios.post(`/restaurant/register/store/post`, {registerData})
export const fetchDetail = (id) => axios.get(`/restaurant/${id.id}/${id.code}`)
