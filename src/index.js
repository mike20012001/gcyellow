import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'


import reducers from './reducers'

import App from './App';

const actionSanitizer = (action) => (
    action.type === 'FILE_DOWNLOAD_SUCCESS' && action.data ?
    { ...action, data: '<<LONG_BLOB>>' } : action
  );

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err) {
        console.log(err)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(err) {
        console.log(err)
        return undefined
    }
}

const composeEnhancers = 
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionSanitizer,
        stateSanitizer: (state) => state.data ? { ...state, data: '<<LONG_BLOB>>' } : state,
        serialize: true
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
    
const persistedState = loadFromLocalStorage()

const enhancer = composeEnhancers(
    applyMiddleware(thunk))


const store = createStore(
    reducers,
    persistedState,
    enhancer)

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


export default store;