import axios from "@/plugins/axios";
import type { FullMovie } from "../../types/fullMovie";
import { FullMovieImpl } from "./types/implementation/fullMovieImpl";
import { SearchMovieImpl } from "./types/implementation/searchMovieImpl";
import type { MovieParams, IdMovieParams, TitleMovieParams, SearchMovieParams } from "./types/movieApiSettings";
import type { SearchMovieResponce, FullMovieResponce } from "./types/movieResponce";


async function request(settings: MovieParams) {
  try {
    const response = await axios.get('', { params: settings })
    return response.data
  }
  catch (e) {
    if (e instanceof Error)
      throw new Error('request\n' + e.message)
  }
}

async function parseMovieInfo(data: FullMovieResponce) {
  return new FullMovieImpl(data)
}

async function parseSearchMovieInfo(data: SearchMovieResponce) {
  return new SearchMovieImpl(data)
}


export default class MovieApi {
  public static async getMovieById(settings: IdMovieParams): Promise<FullMovie> {
    return request(settings)
      .then(result => { return parseMovieInfo(result) })
      .catch(e => { throw new Error('movie-api getMovieById\n' + e) })
  }
  public static async getMovieByTitle(settings: TitleMovieParams): Promise<FullMovie> {
    return request(settings)
      .then(result => { return parseMovieInfo(result) })
      .catch(e => { throw new Error('movie-api getMovieByTitle\n' + e) })
  }
  public static async searchMovie(settings: SearchMovieParams) {
    return request(settings)
      .then(result => { return parseSearchMovieInfo(result) })
      .catch(e => { throw new Error('movie-api searchMovie\n' + e) })
  }
}