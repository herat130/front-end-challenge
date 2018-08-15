import { storeVisitedMovie, movieFetchSuccess } from '../movie.action';
import { STORE_VISITED_MOVIE } from '../../utils/constant';

const data = {
    vote_count: 0,
    id: 162033,
    video: false,
    vote_average: 0,
    title: 'The Setting Sun',
    popularity: 0.479,
    poster_path: '/44bSTbTawKAS9TON7BWesZ3mv9Y.jpg',
    original_language: 'en',
    original_title: 'Rakuyô',
    genre_ids: [],
    backdrop_path: null,
    adult: false,
    overview: 'A Japanese soldier is forced ',
    release_date: '1992-09-15',
    full_poster_path: 'https://image.tmdb.org/t/p/w500//44bSTbTawKAS9TON7BWesZ3mv9Y.jpg',
    full_backdrop_path: 'https://image.tmdb.org/t/p/w500/null',
    listening_token: 'abc',
};

describe('store visited movie action test', () => {

    it('check action type', () => {
        const action = storeVisitedMovie(162033);
        expect(action.type).toEqual(STORE_VISITED_MOVIE);
    });

    it('check action payload', () => {
        const action = storeVisitedMovie(162033);
        expect(action.payload).toEqual({ id: 162033 });
    });

    it('check search fetch success action ', () => {
        const action = movieFetchSuccess(data);
        expect(action.payload).toEqual({ data: data });
    });

});
