import axios from '../utils/axios'


export const addFood = (newMenu) => axios.post('/r/restaurant/register/menu/post', {newMenu})
export const editFood = (id, editedMenu) => axios.patch(`/r/restaurant/register/menu/post/${id}`, {editedMenu})
export const fetchFoodList = (id) => axios.get(`/r/menu/${id.id}/${id.code}`)
export const fetchCurrentStoreFoodList = (id) => axios.get(`/r/restaurant/register/menu/post/${id}`)
export const deleteFoodMenu = (id) => axios.delete(`/r/restaurant/register/menu/post/${id}`)