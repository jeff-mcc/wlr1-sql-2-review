import {createStore,combineReducers} from 'redux'
import movieReducer from './movieReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    movieReducer,
    authReducer
})

export default createStore(rootReducer)