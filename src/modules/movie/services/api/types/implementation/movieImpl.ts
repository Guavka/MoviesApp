import { MovieType } from "@/modules/movie/types/movieEnums";
import { Movie } from "@/modules/movie/types/movie";
import { MovieResponce } from "../movieResponce";

export class MovieImpl implements Movie {
  // #region Protected variables

  protected _title: string;
  protected _year: number;
  protected _imdbID: string;
  protected _type: MovieType;
  protected _poster: string;

  // #endregion

  // #region Public Getters  

  public get poster(): string {
    return this._poster;
  }

  public get title(): string {
    return this._title;
  }

  public get type(): MovieType {
    return this._type;
  }

  public get year(): number {
    return this._year;
  }

  public get imdbID(): string {
    return this._imdbID;
  }

  // #endregion

  // #region Protected setters  

  protected setPoster(value: string) {
    this._poster = value;
  }

  protected setTitle(value: string) {
    try {
      if (!value || value === '') {
        throw new Error();
      }
      this._title = value;
    }
    catch (e) {
      throw new Error(`Error "title". Value = ${value}\n${e.message}`)
    }
  }

  protected setType(value: string) {
    try {
      this._type = MovieType[value.toUpperCase()];
      if (!this._type) {
        throw new Error();
      }
    } catch (e) {
      throw new Error(`Error "type". Value = ${value}\n${e.message}`);
    }
  }

  protected setYear(value: string) {
    try {
      let year = 0;
      try {
        year = Number.parseInt(value);
      } catch {
        throw new Error(`Error runtime`);
      }
      const maxYear = new Date().getFullYear() + 10;
      if (year < 1800 || year > maxYear) {
        throw new Error(`Error year format. Year must be in range [1800,${maxYear}]`);
      }
      this._year = year;
    }
    catch (e) {
      throw new Error(`Error "year". Value = ${value}\n${e.message}`)
    }
  }

  protected setImdbID(value: string) {
    this._imdbID = value;
  }
  // #endregion

  constructor(settings: MovieResponce) {
    try {
      this.setImdbID(settings.imdbID);
      this.setPoster(settings.Poster);
      this.setTitle(settings.Title);
      this.setType(settings.Type);
      this.setYear(settings.Year);
    } catch (e) {
      throw new Error(`Movie model in ${this.imdbID}\n${e}`);
    }
  }
}