import axios from "@/plugins/axios";
import { FullMovie } from "../../types/fullMovie";
import { FullMovieImpl } from "./types/implementation/fullMovieImpl";
import { SearchMovieImpl } from "./types/implementation/searchMovieImpl";
import { MovieParams, IdMovieParams, TitleMovieParams, SearchMovieParams } from "./types/movieApiSettings";
import { SearchMovieResponce, FullMovieResponce } from "./types/movieResponce";


async function request(settings: MovieParams) {
  try {
    const response = await axios.get('', { params: settings })
    return response.data
  }
  catch (e) {
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
      .catch(e => { throw new Error('getMovieById\n' + e.message) })
  }
  public static async getMovieByTitle(settings: TitleMovieParams): Promise<FullMovie> {
    return request(settings)
      .then(result => { return parseMovieInfo(result) })
      .catch(e => { throw new Error('getMovieByTitle\n' + e.message) })
  }
  public static async searchMovie(settings: SearchMovieParams) {
    return request(settings)
      .then(result => { return parseSearchMovieInfo(result) })
      .catch(e => { throw new Error('searchMovie\n' + e.message) })
  }
}