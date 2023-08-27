export interface Movie {
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: [];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface Genre {
  id: number;
  name: string;
}

//requires movie id
export interface MovieDetails {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path?: string;
  };
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  runtime?: number;
  title?: string;
  tagline?: string;
}

//requires series id
export interface SeriesDetails {
  adult?: boolean;
  backdrop_path?: string;
  created_by?: Array<{
    name: string;
  }>;
  episode_run_time?: number;
  first_air_date?: string;
  genres?: Array<Genre>;
  homepage?: string;
  id?: number;
  languages?: [];
  last_air_date?: string;
  name?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: [];
  original_name?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
}

export interface MovieCast {
  adult?: boolean;
  id?: number;
  name: string;
  profile_path: string;
  character?: string;
  order: number;
}

export interface Video {
  name: string;
  key: string;
  site: string;
  type: string;
}
