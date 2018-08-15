import * as React from 'react';
import { connect } from 'react-redux';
import { startSearch, clearSearch } from '../actions/movie.action';
import { MovieDetails } from '../reducers/movie.reducer';
import { Link } from 'react-router-dom';
import { Movie, VisitedMovies } from '../models/movie';
// import { debounce } from 'lodash';

interface SerchStateType {
    searchTerm?: string;
}

class RecentView extends React.Component<SearchPropsTypes, SerchStateType> {

    displayRecentlyViewedMovie(visitedMovie: VisitedMovies[]) {
        return (visitedMovie || []).map((v, i) => {
            return (
                <tr key={i}>
                    <td>
                        <Link to={'/movieDetails/' + v.id}>{v.movie ? v.movie.title : ''}</Link>
                    </td>
                </tr>
            );
        });
    }

    getRecentlySearchViewedMovie() {
        const { visitedMovie } = this.props;
        return visitedMovie ? this.displayRecentlyViewedMovie(visitedMovie) :
            <tr><td>No Recently Searched / Viewed Movie Found</td></tr>;
    }

    render() {
        const { visitedMovie } = this.props;
        return (
            <div className="row">
                <div className="col-xl-12" style={{ display: ((visitedMovie || []).length > 0 ? 'block' : 'none') }}>
                    <h3>Recently Viewed</h3>
                    <table>
                        <tbody>
                            {this.getRecentlySearchViewedMovie()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

interface MapStateToPropsType {
    visitedMovie?: VisitedMovies[];
}

interface MapStateToDispatchType {
}

export type SearchPropsTypes = MapStateToDispatchType & MapStateToPropsType;

const mapStateToProps = (state: { movieDetail: MovieDetails }, props: MapStateToPropsType): MapStateToPropsType => {
    return {
        visitedMovie: state.movieDetail.visitedMovie,
    };
};

const mapStateToDispatch = (dispatch: any): MapStateToDispatchType => {
    return {};
};

export default connect(mapStateToProps, mapStateToDispatch)(RecentView);
