import { FullMovieModel } from "@/models/store/FullMovieModel";
import { IFullMovieModel } from "@/models/store/interfaces/IFullMovieModel";
import { ISeachMovieModel, IFullTextMovieModel, ITextMovieModel } from "@/models/store/interfaces/ITextFullMovieModel";
import axios from "@/plugins/axios";
import { IGetMovieById, IGetMovieByTitle, IGetMovieParams, ISearchMovie } from "./IMovieApiSettings";

enum requestType { get, search }

async function getMovie(settings: IGetMovieParams, type: requestType = requestType.get) {
  try {
    const response = await axios.get('', { params: settings })
    if (type === requestType.search) {
      return parseSearchMovieInfo(<ISeachMovieModel>response.data)
    }
    return parseMovieInfo(<IFullTextMovieModel>response.data)
  }
  catch (e) {
    throw new Error('MovieApi\n' + e.message)
  }
}

async function parseMovieInfo(data: IFullTextMovieModel) {
  const movie: IFullMovieModel = new FullMovieModel(data)
  return movie
}

async function parseSearchMovieInfo(data: ISeachMovieModel) {
  const movie: IFullMovieModel = new FullMovieModel(data)
  return movie
}


export default class MovieApi {
  public static async getMovieById(settings: IGetMovieById): Promise<IFullMovieModel> {
    return getMovie(settings).
      catch(e => { throw new Error('getMovieById\n' + e.message) })
  }
  public static async getMovieByTitle(settings: IGetMovieByTitle): Promise<IFullMovieModel> {
    return getMovie(settings).
      catch(e => { throw new Error('getMovieByTitle\n' + e.message) })
  }
  public static async searchMovie(settings: ISearchMovie) {

  }
}