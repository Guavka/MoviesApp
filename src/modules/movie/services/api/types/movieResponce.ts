export interface MovieResponce {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
}

export interface FullMovieResponce extends MovieResponce {
  Actors: string,
  Awards: string,
  BoxOffice: string,
  Country: string,
  DVD: string,
  Director: string,
  Genre: string,
  Language: string,
  Metascore: string,
  Plot: string,
  Production: string,
  Rated: string,
  Ratings: Record<string, string>[],
  Released: string,
  Response: string,
  Runtime: string,
  Website: string,
  Writer: string,
  imdbRating: string,
  imdbVotes: string
}

export interface SearchMovieResponce {
  Search: MovieResponce[],
  totalResults: string,
  Response: string
}