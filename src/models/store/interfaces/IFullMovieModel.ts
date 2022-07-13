import { LanguageType, MovieGenreType, MovieType, RatedType } from '../../Enums';

export interface IMoviesObjectInfo {
  id: string,
  value: IFullMovieModel
}

export interface IRatingInfo {
  source: string,
  value: string
}

export interface IMovieModel {
  get year(): number
  get title(): string
  get imdbID(): string
  get type(): MovieType
  get poster(): string
}

export interface IFullMovieModel extends IMovieModel {
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
  get writers(): string[]
  get website(): string
  get runtime(): number
  get response(): boolean
  get ratings(): IRatingInfo[]
  get rated(): RatedType
  get production(): string
  get plot(): string
  get metascore(): number | undefined
}
