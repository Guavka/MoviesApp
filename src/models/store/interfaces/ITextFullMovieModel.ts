export interface ITextMovieModel {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
}

export interface IFullTextMovieModel extends ITextMovieModel {
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

export interface ISeachMovieModel {
  search: Record<string, ITextMovieModel>,
  totalResults: number,
  response: boolean
}