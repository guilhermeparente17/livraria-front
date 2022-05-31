import { END_LOADING, INIT_LOADING } from './booksActions';

export const initLoading = () => ({
    type: INIT_LOADING
})

export const endLoading = () => ({
    type: END_LOADING
})