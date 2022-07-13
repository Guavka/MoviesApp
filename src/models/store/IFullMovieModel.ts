import { LanguageType, MovieGenreType, MovieType, RatedType } from "../enums"

export interface IMoviesObjectInfo {
  id: string,
  value: IFullMovieModel
}

export interface IRatingInfo {
  source: string,
  value: string
}

export interface ITextFullMovieModel {
  actors: string,
  awards: string,
  boxOffice: string,
  country: string,
  dvd: string,
  director: string,
  genre: string,
  language: string,
  metascore: string,
  plot: string,
  poster: string,
  production: string,
  rated: string,
  ratings: Record<string, string>[],
  released: string,
  response: string,
  runtime: string,
  title: string,
  type: string,
  website: string,
  writers: string,
  year: string,
  imdbID: string,
  imdbRating: string,
  imdbVotes: string
}

export interface IFullMovieModel {
  get actors(): string[]
  get awards(): string
  get boxOffice(): number | undefined
  get country(): string
  get dvd(): Date | undefined
  get director(): string
  get genre(): MovieGenreType[]
  get language(): LanguageType
  get released(): Date | undefined
  get imdbVotes(): number
  get imdbRating(): number
  get imdbID(): string
  get year(): number
  get writers(): string[]
  get website(): string
  get type(): MovieType
  get title(): string
  get runtime(): number
  get response(): boolean
  get ratings(): IRatingInfo[]
  get rated(): RatedType
  get production(): string
  get poster(): string
  get plot(): string
  get metascore(): number | undefined
}