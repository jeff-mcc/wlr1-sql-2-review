//initial state
const initialState = {
    user: null
}

//action types
const SAVE_USER = "SAVE_USER"

//action builders
export function saveUser(user){
    return {
        type: SAVE_USER,
        payload: user
    }
}

//reducer
export default function authReducer(state=initialState,action){
    switch(action.type){
        case SAVE_USER:
            return {...state,user: action.payload}
        default:
            return {...state}
    }
}