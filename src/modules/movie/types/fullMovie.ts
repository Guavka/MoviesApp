import type { Movie } from "./movie";
import type { MovieCountry, MovieGenre, MovieLanguage, MovieRated } from "./movieEnums";

export interface MovieRating {
  Source: string,
  Value: string
}

export interface FullMovie extends Movie {
  get actors(): string[] | undefined
  get awards(): string | undefined
  get boxOffice(): number | undefined
  get country(): MovieCountry[] | undefined
  get dvd(): Date | undefined
  get director(): string | undefined
  get genre(): MovieGenre[] | undefined
  get language(): MovieLanguage[] | undefined
  get released(): Date | undefined
  get imdbVotes(): number | undefined
  get imdbRating(): number | undefined
  get writers(): string[] | undefined
  get website(): URL | undefined
  get runtime(): number | undefined
  get response(): boolean | undefined
  get ratings(): MovieRating[] | undefined
  get rated(): MovieRated | undefined
  get production(): string | undefined
  get plot(): string | undefined
  get metascore(): number | undefined
}

