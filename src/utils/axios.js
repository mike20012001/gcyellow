import axios from 'axios'

const instance = axios.create(
    // { baseURL:"http://localhost:5000" }
    { baseURL:"http://ec2-15-165-158-160.ap-northeast-2.compute.amazonaws.com:3000" }

)

export default instance;