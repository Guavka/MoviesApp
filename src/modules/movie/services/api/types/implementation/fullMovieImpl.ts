import type { FullMovie, MovieRating } from "@/modules/movie/types/fullMovie";
import { MovieGenre, MovieLanguage, MovieRated } from "@/modules/movie/types/movieEnums";
import Parser from "@/modules/utils/parser";
import type { FullMovieResponce } from "../movieResponce";
import { MovieImpl } from "./movieImpl";


export class FullMovieImpl extends MovieImpl implements FullMovie {
  // #region Protected variables
  protected _actors!: string[] | undefined;
  protected _awards!: string | undefined;
  protected _boxOffice!: number | undefined;
  protected _country!: string | undefined;
  protected _dvd!: Date | undefined;
  protected _director!: string | undefined;
  protected _genre!: MovieGenre[] | undefined;
  protected _language!: MovieLanguage | undefined;
  protected _released!: Date | undefined;
  protected _imdbVotes!: number | undefined;
  protected _imdbRating!: number | undefined;
  protected _writers!: string[] | undefined;
  protected _website!: URL | undefined;
  protected _runtime!: number | undefined;
  protected _response!: boolean | undefined
  protected _ratings!: MovieRating[] | undefined;
  protected _rated!: MovieRated | undefined;
  protected _production!: string | undefined;
  protected _plot!: string | undefined;
  protected _metascore!: number | undefined;
  // #endregion

  // #region Public Getters
  public get actors(): string[] | undefined {
    return this._actors;
  }

  public get awards(): string | undefined {
    return this._awards;
  }

  public get boxOffice(): number | undefined {
    return this._boxOffice;
  }

  public get country(): string | undefined {
    return this._country;
  }

  public get dvd(): Date | undefined {
    return this._dvd;
  }

  public get director(): string | undefined {
    return this._director;
  }

  public get genre(): MovieGenre[] | undefined {
    return this._genre;
  }

  public get language(): MovieLanguage | undefined {
    return this._language;
  }

  public get metascore(): number | undefined {
    return this._metascore;
  }

  public get plot(): string | undefined {
    return this._plot;
  }

  public get production(): string | undefined {
    return this._production;
  }

  public get rated(): MovieRated | undefined {
    return this._rated;
  }

  public get ratings(): MovieRating[] | undefined {
    return this._ratings;
  }

  public get released(): Date | undefined {
    return this._released;
  }

  public get response(): boolean | undefined {
    return this._response;
  }

  public get runtime(): number | undefined {
    return this._runtime;
  }

  public get website(): URL | undefined {
    return this._website;
  }

  public get writers(): string[] | undefined {
    return this._writers;
  }

  public get imdbRating(): number | undefined {
    return this._imdbRating;
  }

  public get imdbVotes(): number | undefined {
    return this._imdbVotes;
  }
  // #endregion

  // #region protected setters
  setActors(value: string) {
    this._actors = Parser.GetValidStringArray(value, 'Actors')
  }

  setAwards(value: string) {
    this._awards = Parser.GetValidString(value, 'Awards')
  }

  setBoxOffice(value: string) {
    this._boxOffice = Parser.GetValidPositiveInt(value, 'Box office')
  }

  setCountry(value: string) {
    this._awards = Parser.GetValidString(value, 'Country')
  }

  setDvd(value: string) {
    this._dvd = Parser.GetValidDate(value, 'DVD')
  }

  setDirector(value: string) {
    this._director = Parser.GetValidString(value, 'Director')
  }

  setGenre(value: string) {
    const result: MovieGenre[] = []
    const genres: MovieGenre[] = value.split(',').map((item) => item.trim()).reduce((acc, el) => {
      const enumValue = <MovieGenre><unknown>Parser.GetValidEnumValue(value, MovieGenre, 'Movie genre')
      acc.push(enumValue)
      return acc;
    }, result);
    this._genre = genres;
  }

  setLanguage(value: string) {
    this._language = <MovieLanguage | undefined>Parser.GetValidEnumValue(value, MovieLanguage, 'Movie language')
  }

  setMetascore(value: string) {
    this._metascore = Parser.GetValidPositiveInt(value, 'Metasctore')
  }

  setPlot(value: string) {
    this._plot = Parser.GetValidString(value, 'Plot', 25, 5000)
  }

  setProduction(value: string) {
    this._production = Parser.GetValidString(value, 'Production')
  }

  setRated(value: string) {
    value = value.replace(/[&\\/\\#,+()$~%.'":*?<>{}]-_/g, '')
    this._rated = <MovieRated | undefined>Parser.GetValidEnumValue(value, MovieRated, 'Movie rated')
  }

  setRatings(value: Record<string, string>[]) {
    try {
      const result: MovieRating[] = []
      this._ratings = value.reduce((acc, el) => {
        const obj: MovieRating = {
          Source: el.Source,
          Value: el.Value,
        };
        acc.push(obj);
        return acc;
      }, result);
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "ratings". Value = ${value}\n${e.message}`);
    }
  }

  setReleased(value: string) {
    this._released = Parser.GetValidDate(value, 'Released')
  }

  setResponse(value: string) {
    try {
      this._response = Boolean(value);
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "response". Value = ${value}\n${e.message}`);
    }
  }

  setRuntime(value: string) {
    this._runtime = Parser.GetValidPositiveInt(value, 'Runtime')
  }

  setWebsite(value: string) {
    this._website = Parser.GetValidUrl(value, 'Website')
  }

  setWriters(value: string) {
    this._writers = Parser.GetValidStringArray(value, 'Writers')
  }

  setImdbRating(value: string) {
    this._imdbRating = Parser.GetValidPositiveFloat(value, 'Rating')
  }

  setImdbVotes(value: string) {
    this._imdbVotes = Parser.GetValidPositiveFloat(value, 'ImdbVotes')
  }
  // #endregion

  constructor(settings: FullMovieResponce) {
    try {
      super(settings);
      this.setActors(settings.Actors);
      this.setAwards(settings.Awards);
      this.setBoxOffice(settings.BoxOffice);
      this.setCountry(settings.Country);
      this.setDvd(settings.DVD);
      this.setDirector(settings.Director);
      this.setGenre(settings.Genre);
      this.setLanguage(settings.Language);
      this.setMetascore(settings.Metascore);
      this.setPlot(settings.Plot);
      this.setProduction(settings.Production);
      this.setRated(settings.Rated);
      this.setRatings(settings.Ratings);
      this.setReleased(settings.Released);
      this.setResponse(settings.Response);
      this.setRuntime(settings.Runtime);
      this.setWebsite(settings.Website);
      this.setWriters(settings.Writer);
      this.setImdbRating(settings.imdbRating);
      this.setImdbVotes(settings.imdbVotes);
    } catch (e) {
      throw new Error(`Full movie info in ${settings.imdbID}\n${e}`);
    }
  }
}
