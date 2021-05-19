//initial state
const initialState = {
    movies: []
};

//action types
const SAVE_MOVIES = "SAVE_MOVIES"

//action builders
export function saveMovies(movies){
    return {
        type: SAVE_MOVIES,
        payload: movies
    }
}

//reducer
export default function movieReducer(state=initialState,action){
    switch(action.type){
        case SAVE_MOVIES:
            return {...state,movies: action.payload}
        default:
            return {...state}
    }
}