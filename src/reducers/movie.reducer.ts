import { Movie, Action, VisitedMovies } from '../models/movie';
import {
    MOVIE_FETCH_START, MOVIE_FETCH_SUCCESS, MOVIE_FETCH_FAIL,
    STORE_VISITED_MOVIE, CLEAR_SEARCH_RESULT, STOP_FURTHER_SEARCH
} from '../utils/constant';

export interface MovieDetails {
    error: boolean;
    loading: boolean;
    searchMovie?: Movie;
    stopSearch?: boolean;
    visitedMovie: VisitedMovies[];
}

const initialState: MovieDetails = {
    error: false,
    loading: false,
    searchMovie: null,
    visitedMovie: [],
    stopSearch: false,
};

export default function(state: MovieDetails = initialState, action: Action): MovieDetails {
    let searchMovie;
    let visitedMovie;
    let currentMovieId;
    switch (action.type) {
        case MOVIE_FETCH_START:
            return Object.assign({}, state, { loading: true });
        case MOVIE_FETCH_SUCCESS:
            return Object.assign({}, state, { loading: false, searchMovie: action.payload.data });
        case MOVIE_FETCH_FAIL:
            return Object.assign({}, state, { loading: false, error: true });
        case CLEAR_SEARCH_RESULT:
            return Object.assign({}, state, { loading: false, error: false, searchMovie: null, stopSearch: false });
        case STORE_VISITED_MOVIE:
            searchMovie = Object.assign({}, state.searchMovie);
            visitedMovie = [...state.visitedMovie];
            currentMovieId = action.payload.id;
            // tslint:disable-next-line:no-debugger
            if ((visitedMovie || []).filter(v => v.id === currentMovieId).length === 0) {
                visitedMovie.push({ id: currentMovieId, movie: searchMovie });
            }
            return Object.assign({}, state, { visitedMovie: visitedMovie });
        case STOP_FURTHER_SEARCH:
            return Object.assign({}, state, { stopSearch: true });
        default:
            return state;
    }
}
