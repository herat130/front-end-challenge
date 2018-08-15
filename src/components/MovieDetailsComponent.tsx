import * as React from 'react';
import { storeVisitedMovie } from '../actions/movie.action';
import { connect } from 'react-redux';
import { MovieDetails } from '../reducers/movie.reducer';
import { getSelectedMovie } from '../selector/movieSelector';
import { VisitedMovies, Movie } from '../models/movie';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import RecentView from './RecentView';
import { isEmpty } from '../utils/common';

class MovieDetailsComponent extends React.Component<Props & MapStateToDispatchMovieDetails, any> {

    componentDidMount() {
        // tslint:disable-next-line:no-shadowed-variable
        const { storeVisitedMovie, currentMovieId } = this.props;
        storeVisitedMovie(currentMovieId);
    }

    componentWillReceiveProps(nextProps: Props) {
        // tslint:disable-next-line:no-shadowed-variable
        const { currentMovieId, storeVisitedMovie } = this.props;
        if (currentMovieId !== nextProps.match.params.movieId) {
            storeVisitedMovie(nextProps.match.params.movieId);
        }
    }

    render() {
        const { currentMovieDetails } = this.props;
        const movieInfo: Movie = currentMovieDetails ? currentMovieDetails.movie : null;
        if (movieInfo == null || isEmpty(movieInfo)) {
            return (
                <React.Fragment>
                    <SearchComponent otherComponentCall={true} />
                    <h2>No Data Available Please Try later</h2>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <SearchComponent otherComponentCall={true} />
                <div className="blank-space-10" />
                <div className="blank-space-10" />
                <div className="row movie-details">
                    {movieInfo ? this.renderMovieInfo(movieInfo) : ''}
                </div>
            </React.Fragment>
        );
    }

    renderMovieInfo(movieInfo: Movie) {
        return (
            <React.Fragment>
                <div className="blank-space-10" />
                <div className="col-xl-4">
                    <img
                        src={movieInfo.full_backdrop_path}
                        alt="No Image Available"
                        className="col-md-12"
                    />
                </div>
                <div className="col-xl-6 movie-details-desc">
                    <div>
                        <h2>{movieInfo.title}</h2>
                    </div>
                    <div>
                        <span className="title col-xl-6">Release Date</span>:<span>{movieInfo.release_date}</span>
                    </div>
                    <div>
                        <span className="title col-xl-6">Vote Count</span>:<span>{movieInfo.vote_count || ''}</span>

                    </div>
                    <div>
                        <span className="title col-xl-6">Vote Average</span>:<span>{movieInfo.vote_average || ''}</span>
                    </div>
                    {/* <h3>{movieInfo.original_title}</h3> */}
                    <div>
                        <span className="title col-xl-6">Language</span>:<span>{movieInfo.original_language}</span>
                    </div>
                    <div>
                        <span className="title col-xl-6">Popularity</span>
                        <span>{movieInfo.popularity}</span>
                    </div>
                    <div>
                        <p>{movieInfo.overview}</p>
                    </div>

                </div>
                <div className="col-xl-2">
                    <RecentView />
                </div>
            </React.Fragment>

        );
    }
}

interface MatchParams {
    movieId: number;
}
interface Props extends RouteComponentProps<MatchParams> {
    currentMovieId: number;
    currentMovieDetails: VisitedMovies;
}

interface MapStateToPropsMovieDetails {
    currentMovieId: number;
    currentMovieDetails: VisitedMovies;
}

interface MapStateToDispatchMovieDetails {
    storeVisitedMovie: (movieId: number) => void;
}

type MovieDetailsComponentProps = MapStateToPropsMovieDetails & MapStateToDispatchMovieDetails;

const mapStatetoProps = (state: { movieDetail: MovieDetails }, props: any): MapStateToPropsMovieDetails => {
    const { movieId } = props.match.params;
    return {
        currentMovieId: movieId,
        currentMovieDetails: getSelectedMovie(state, movieId),
    };
};

const mapStateToDispatch = (dispatch: any): MapStateToDispatchMovieDetails => {
    return {
        storeVisitedMovie: (movieId: number) => { dispatch(storeVisitedMovie(movieId)); },
    };
};

export default withRouter(connect(mapStatetoProps, mapStateToDispatch)(MovieDetailsComponent));
