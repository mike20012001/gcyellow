import axios from '../utils/axios'
import { returnErrors } from '../actions/errorActions'

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
    } from './actionTypes';


// check token, load user

export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch ({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
    // axios.get('/api/auth/user', config))
        .then(res => 
            dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status)); //id는 필요 없어서 제외
            dispatch({
            type: AUTH_ERROR
        })})
}

// Register User
export const register = ({ name, email, password, mobile, role }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    // Request Body
    const body = JSON.stringify({ name, email, password, mobile, role })

    axios.post('/api/auth/user', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data // user data & token을 돌려받음.
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')); //id는 필요 없어서 제외
            dispatch({ 
                type: REGISTER_FAIL
            })})
}


// Login
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    // Request Body
    const body = JSON.stringify({ email, password })

    axios.post('/api/auth/login', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data // user data & token을 돌려받음.
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')); //id는 필요 없어서 제외
            dispatch({ 
                type: LOGIN_FAIL
            })
        })
}


// setup config/headers and token ( helper function으로 token을 얻는 역할)
export const tokenConfig = getState => {
        //get token from localstorage
        const token = getState().auth.token

        const config = {
            headers: {
                // "Content-Type": "application/json"
                // "Content-Type": "multipart/form-data"
            }
        }
    
        // if token, add to headers
        if(token) {
            config.headers['x-auth-token'] = token;
        }
    return config
}


export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};