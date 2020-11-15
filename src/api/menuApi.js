import axios from '../utils/axios'

export const fetchFoodList = (id) => axios.get(`/restaurant/${id.id}/${id.code}`) // 상점정보 + 메뉴정보 populated 된 자료 요청