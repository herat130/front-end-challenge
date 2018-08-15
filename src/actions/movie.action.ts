import {
    MOVIE_FETCH_START, MOVIE_FETCH_FAIL, MOVIE_FETCH_SUCCESS,
    STORE_VISITED_MOVIE, CLEAR_SEARCH_RESULT, STOP_FURTHER_SEARCH
} from '../utils/constant';
import { Action, Movie } from '../models/movie';
import * as fetch from 'isomorphic-fetch';

export const movieFetchStart = (): Action => {
    return {
        type: MOVIE_FETCH_START,
        payload: '',
    };
};

export const movieFetchSuccess = (resultData: Movie): Action => {
    return {
        type: MOVIE_FETCH_SUCCESS,
        payload: { data: resultData },
    };
};

const movieFetchFail = (error: string): Action => {
    return {
        type: MOVIE_FETCH_FAIL,
        payload: { errorMessage: error },
    };
};

const noMovieFound = () => {
    return {
        type: STOP_FURTHER_SEARCH,
        payload: '',
    };
};

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH_RESULT,
        payload: '',
    };
};

export const startSearch = (searchTerm: string): Promise<any> => {
    return fetchMovieSearchData(searchTerm).then(parseData => parseData.json())
        .then((resultData: Movie) => {
            /** include condition if no data found to set reducer so that further ajax call can be prevented */
            // if (!resultData.title && resultData.listening_token) {
            //     // there is no search data available so stop further search
            //     return noMovieFound();
            // }
            return movieFetchSuccess(resultData);
        }
        )
        .catch(error => movieFetchFail(error));
};

export const storeVisitedMovie = (visitedId: number) => {
    return {
        type: STORE_VISITED_MOVIE,
        payload: { id: visitedId },
    };
};

/** The below function is used to FetchData
 * It can be make generic if we have more
 *  module who fetchData from API
 */

const fetchMovieSearchData = (searchTerm: string): Promise<any> => {
    try {
        return fetch('https://sbot-fe-test.herokuapp.com/api/v1/movies?query=' + searchTerm,
            { credentials: 'same-origin', method: 'GET' });
    } catch (error) {
        console.warn('API call Failed ' + error.message);
    }
};
