import * as React from 'react';
import { connect } from 'react-redux';
import { startSearch, clearSearch, movieFetchStart } from '../actions/movie.action';
import { MovieDetails } from '../reducers/movie.reducer';
import { Link } from 'react-router-dom';
import { Movie, VisitedMovies } from '../models/movie';
import { debounce, isEmpty } from '../utils/common';

interface SerchStateType {
    searchTerm?: string;
}

class SearchComponent extends React.Component<SearchPropsTypes, SerchStateType> {

    constructor(props: SearchPropsTypes) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.search = debounce(this.search, 500);
    }

    search = value => {
        // tslint:disable-next-line:no-shadowed-variable
        const { startSearch, clearSearch } = this.props;
        // const { value } = event.currentTarget;
        if (value.trim() !== '') {
            startSearch(value);
        } else {
            clearSearch();
        }
        this.setState({
            searchTerm: value,
        });
    }

    displayResult(searchMovie: Movie) {
        return (
            <tr>
                <td>
                    <Link to={'/movieDetails/' + searchMovie.id}>{searchMovie.title}-({searchMovie.release_date})</Link>
                </td>
            </tr>
        );
    }

    getSearchMovieList() {
        const { searchMovie, loading } = this.props;
        if (loading) {
            return (
                <tr><td>Fethching Result...</td></tr>
            );
        }
        return searchMovie.title && searchMovie.listening_token ?
            this.displayResult(searchMovie) : <tr><td>No Movie Found</td></tr>;
    }

    render() {
        const { error, otherComponentCall, searchMovie } = this.props;
        const { searchTerm } = this.state;

        if (error) {
            return (
                <div>Some Error Occured</div>
            );
        }
        return (
            <React.Fragment>
                <div style={{ display: otherComponentCall ? 'none' : 'block' }}>
                    <div className="blank-space-300" />
                </div>
                <div className="row">

                    <div className="col-xl-12">
                        <input
                            type="text"
                            className="col-xl-12 search-bar"
                            id="search"
                            onChange={(e) => { this.search(e.currentTarget.value) }}
                            placeholder="Search Movie"
                        />
                    </div>
                    <span className="col-xl-12 text-right">search works on debounce</span>
                    <div className="blank-space-10" />
                    <div className="col-xl-12" style={{ display: (searchTerm.trim() === '' ? 'none' : 'block') }}>
                        {/* <h3>Search Result</h3> */}
                        <table>
                            <tbody>
                                {searchTerm.trim() !== '' && !isEmpty(searchMovie) ? this.getSearchMovieList() : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

interface MapStateToPropsType {
    error?: boolean;
    loading?: boolean;
    searchMovie?: Movie;
    visitedMovie?: VisitedMovies[];
    stopSearch?: boolean;
    otherComponentCall?: boolean;
}

interface MapStateToDispatchType {
    startSearch?: (searchTerm: string) => void;
    clearSearch?: () => void;
}

export type SearchPropsTypes = MapStateToDispatchType & MapStateToPropsType;

const mapStateToProps = (state: { movieDetail: MovieDetails }, props: MapStateToPropsType): MapStateToPropsType => {
    return {
        error: state.movieDetail.error,
        stopSearch: state.movieDetail.stopSearch,
        loading: state.movieDetail.loading,
        searchMovie: state.movieDetail.searchMovie,
        visitedMovie: state.movieDetail.visitedMovie,
    };
};

const mapStateToDispatch = (dispatch: any): MapStateToDispatchType => {
    return {
        startSearch: (searchTerm: string) => {
            dispatch(movieFetchStart());
            startSearch(searchTerm).then(action => dispatch(action));
        },
        clearSearch: () => (dispatch(clearSearch())),
    };
};

export default connect(mapStateToProps, mapStateToDispatch)(SearchComponent);
