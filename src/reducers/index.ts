import { combineReducers, Reducer } from 'redux';
import movieDetail, { MovieDetails } from './movie.reducer';

export const allReducer = combineReducers({
    movieDetail: movieDetail as Reducer<MovieDetails>,
});

export interface ApplicationState {
    movieDetail: MovieDetails;
}
