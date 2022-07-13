import { Movie } from "@/modules/movie/types/movie";
import { SearchMovie } from "@/modules/movie/types/searchMovie";
import { MovieResponce, SearchMovieResponce } from "../movieResponce";
import { MovieImpl } from "./movieImpl";

export class SearchMovieImpl implements SearchMovie {
  // #region Protected variables
  protected _search: Movie[]
  protected _totalResults: number
  protected _response: boolean
  // #endregion

  // #region Public Getters  
  get search(): Movie[] {
    return this._search
  }
  get totalResults(): number {
    return this._totalResults
  }
  get response(): boolean {
    return this._response
  }
  // #endregion

  // #region Protected setters  
  protected setTotalResults(value: string) {
    try {
      this._totalResults = Number.parseInt(value);
    } catch (e) {
      throw new Error('Error total results\n' + e.message);
    }
  }
  protected setResponse(value: string) {
    try {
      this._response = Boolean(value);
    } catch (e) {
      throw new Error('Error response' + e.message);
    }
  }
  protected setSearch(value: MovieResponce[]) {
    try {
      const result = <Movie[]>[]
      value.forEach(el => {
        result.push(new MovieImpl(el))
      })
      this._search = result
    } catch (e) {
      throw new Error('Error search' + e.message);
    }
  }
  // #endregion

  constructor(settings: SearchMovieResponce) {
    try {
      this.setResponse(settings.Response)
      this.setTotalResults(settings.totalResults)
      this.setSearch(settings.Search)
    } catch (e) {
      throw new Error(`search movie\n${e}`);
    }
  }
}