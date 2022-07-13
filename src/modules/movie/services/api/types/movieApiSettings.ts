import { MoviePlot, MovieType } from "../../../types/movieEnums";

export interface MovieParams {
  y?: number,
  type?: MovieType,
}

export interface IdMovieParams extends MovieParams {
  i: string,
  plot?: MoviePlot,
}

export interface TitleMovieParams extends MovieParams {
  t: string,
  plot?: MoviePlot,
}

export interface SearchMovieParams extends MovieParams {
  s: string,
  page?: number
}