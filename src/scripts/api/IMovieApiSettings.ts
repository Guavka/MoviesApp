import { MovieInfoType, MovieType } from "@/models/enums";

export interface IGetMovieParams {
  y?: number,
  type?: MovieType,
}

export interface IGetMovieById extends IGetMovieParams {
  i: string,
  plot?: MovieInfoType,
}

export interface IGetMovieByTitle extends IGetMovieParams {
  t: string,
  plot?: MovieInfoType,
}

export interface ISearchMovie extends IGetMovieParams {
  s: string,
  page: number
}