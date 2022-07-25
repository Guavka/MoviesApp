import type { FullMovie } from "../../types/fullMovie";

export interface MoviesState {
  top250IDs: string[],
  moviesPerPage: number,
  currentPage: number,
  movies: Record<string, FullMovie>
}

export interface LoaderState {
  isShowLoader: boolean
}