import movieDetail, { MovieDetails } from '../../reducers/movie.reducer';
import { Movie } from '../../models/movie';
import { MOVIE_FETCH_SUCCESS } from '../../utils/constant';

const data: Movie = {
    vote_count: 1437,
    id: 241554,
    video: false,
    vote_average: 6.4,
    title: 'Run All Night',
    popularity: 11.827,
    poster_path: '/aqNJrAxudMRNo8jg3HOUQqdl2xr.jpg',
    original_language: 'en',
    original_title: 'Run All Night',
    genre_ids: [53],
    backdrop_path: '/rSf0RYkPiMo9TyjHs2vI8rHlmfF.jpg',
    adult: false,
    overview: 'Brooklyn mobster and prolific hit man Jimmy Conlon has seen .',
    release_date: '2015-03-11',
    full_poster_path: 'https://image.tmdb.org/t/p/w500//aqNJrAxudMRNo8jg3HOUQqdl2xr.jpg',
    full_backdrop_path: 'https://image.tmdb.org/t/p/w500//rSf0RYkPiMo9TyjHs2vI8rHlmfF.jpg',
    listening_token: '26b9085b-94c9-4394-abb2-1c3c9c91b621',
};

describe('check reducer', () => {

    it('insert reducer', () => {
        const action = {
            type: MOVIE_FETCH_SUCCESS,
            payload: { data },
        };
        const initialState: MovieDetails = {
            error: false,
            loading: false,
            searchMovie: null,
            visitedMovie: [],
            stopSearch: false,
        };
        const newState = movieDetail(initialState, action);
        expect(newState).toEqual({
            loading: false, searchMovie: data, error: false,
            visitedMovie: [], stopSearch: false,
        });

    });
});
