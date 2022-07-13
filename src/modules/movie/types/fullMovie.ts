import { MovieGenre, MovieLanguage, MovieRated } from "./movieEnums";
import { Movie } from "./movie";

export interface MovieRating {
  source: string,
  value: string
}

export interface FullMovie extends Movie {
  get actors(): string[]
  get awards(): string
  get boxOffice(): number | undefined
  get country(): string
  get dvd(): Date | undefined
  get director(): string
  get genre(): MovieGenre[]
  get language(): MovieLanguage
  get released(): Date | undefined
  get imdbVotes(): number
  get imdbRating(): number
  get writers(): string[]
  get website(): string
  get runtime(): number
  get response(): boolean
  get ratings(): MovieRating[]
  get rated(): MovieRated | undefined
  get production(): string
  get plot(): string
  get metascore(): number | undefined
}

