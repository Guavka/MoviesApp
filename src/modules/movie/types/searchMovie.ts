import { Movie } from "./movie";

export interface SearchMovie {
  get search(): Movie[]
  get totalResults(): number
  get response(): boolean
}