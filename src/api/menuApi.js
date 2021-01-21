import axios from '../utils/axios'


export const addFood = (newMenu) => axios.post('/r/restaurant/register/menu/post', {newMenu})
export const editFood = (id, editedMenu) => axios.patch(`/r/restaurant/register/menu/post/${id}`, {editedMenu})
export const fetchCurrentStoreFoodList = (id) => axios.get(`/r/restaurant/register/menu/post/${id}`)
export const deleteFoodMenu = (id) => axios.delete(`/r/restaurant/register/menu/post/${id}`)


export const fetchFoodList = (restaurantUid) => axios.get(`/r/menu/menumain/${restaurantUid}`) // 각 레스토랑별 메뉴 
export const updateFoodList = (restaurantUid) => axios.patch(`/r/menu/menumain/${restaurantUid}`)
// export const fetchFoodList = (id) => axios.get(`/r/menu/${id.id}/${id.code}`) // 기존 api
// export const fetchCurrentStoreMenu = (restaurantUid) => axios.get(`/r/menu/${restaurantUid}`) // 1/14일 api(draft)




// 메뉴 정보 - user 용
//         - admin/owner 용
