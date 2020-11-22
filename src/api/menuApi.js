import axios from '../utils/axios'


export const addFood = (newMenu) => axios.post('/register/menu/post', {newMenu})
export const editFood = (id, editedMenu) => axios.patch(`/register/menu/post/${id}`, {editedMenu})
export const fetchFoodList = (id) => axios.get(`/restaurant/${id.id}/${id.code}`)
export const fetchCurrentStoreFoodList = (id) => axios.get(`/register/menu/post/${id}`)
export const deleteFoodMenu = (id) => axios.delete(`/register/menu/post/${id}`)