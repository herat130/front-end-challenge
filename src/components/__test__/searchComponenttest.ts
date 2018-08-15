import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { MovieDetails } from '../../reducers/movie.reducer';
import SearchComponent from '../SearchComponent';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
});

const movieDetail: MovieDetails = {
    error: false,
    loading: false,
    searchMovie: null,
    visitedMovie: [],
};

const mockStore = configureStore();
const store = mockStore({ movieDetail: movieDetail });

// describe('Search Component test', () => {
//     it('searchComponent check search box', () => {

//     });
// });
