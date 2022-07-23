import type { MovieType } from './movieEnums';

export interface Movie {
  get year(): number | undefined
  get title(): string | undefined
  get imdbID(): string | undefined
  get type(): MovieType | undefined
  get poster(): URL | undefined
}

