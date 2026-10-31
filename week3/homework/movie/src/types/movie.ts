export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  original_language: string;

  genre_ids: number[];
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string; // "US"
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string; // "en"
  english_name: string;
  name: string;
}

export interface MovieDetail extends Omit<Movie, "genre_ids"> {
  genres: Genre[];
  tagline: string;
  runtime: number | null;
  status: string;
  budget: number;
  revenue: number;
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
}
