import { END_LOADING, INIT_LOADING } from "./booksActions";

const initialState = {
    loading: false,
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case INIT_LOADING:
            return {...state, loading: true}
        case END_LOADING:
                return {...state, loading: false}
        default:
            return state;
    }
}  

export default rootReducer;