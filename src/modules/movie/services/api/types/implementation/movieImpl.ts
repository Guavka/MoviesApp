import { MovieType } from "@/modules/movie/types/movieEnums";
import type { Movie } from "@/modules/movie/types/movie";
import type { MovieResponce } from "../movieResponce";
import Parser from "@/modules/utils/parser";

export class MovieImpl implements Movie {
  // #region Protected variables

  protected _title!: string | undefined;
  protected _imdbID!: string | undefined;
  protected _type!: MovieType | undefined;
  protected _poster!: URL | undefined;
  protected _year!: Date | undefined;

  // #endregion

  // #region Public Getters  

  public get poster(): URL | undefined {
    return this._poster;
  }

  public get title(): string | undefined {
    return this._title;
  }

  public get type(): MovieType | undefined {
    return this._type;
  }

  public get year(): number | undefined {
    if (this._year)
      return this._year.getFullYear();
    return this._year
  }

  public get imdbID(): string | undefined {
    return this._imdbID;
  }

  // #endregion

  // #region Protected setters  

  protected setPoster(value: string) {
    this._poster = Parser.GetValidUrl(value, 'Poster')
  }

  protected setTitle(value: string) {
    this._title = Parser.GetValidString(value, 'Title')
  }

  protected setType(value: string) {
    this._type = MovieType[value.toUpperCase() as keyof typeof MovieType]
  }

  protected setYear(value: string) {
    this._year = Parser.GetValidDate(value, 'Year')
  }

  protected setImdbID(value: string) {
    this._imdbID = Parser.GetValidString(value, 'ImdbID', 9, 9);
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