export interface Movie {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    full_poster_path: string;
    full_backdrop_path: string;
    listening_token: string;
}

export interface Action {
    type: string;
    payload: any;
}

export interface VisitedMovies {
    id: number;
    movie: Movie;
}