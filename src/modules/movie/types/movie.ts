import { MovieType } from './movieEnums';

export interface Movie {
  get year(): number
  get title(): string
  get imdbID(): string
  get type(): MovieType
  get poster(): string
}

