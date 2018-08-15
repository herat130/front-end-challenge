import { MovieDetails } from '../reducers/movie.reducer';
import { VisitedMovies } from '../models/movie';

export const getSelectedMovie = (state: { movieDetail: MovieDetails }, movieId: number): VisitedMovies => {
    return (state.movieDetail.visitedMovie || []).find(v => v.id === movieId);
};
