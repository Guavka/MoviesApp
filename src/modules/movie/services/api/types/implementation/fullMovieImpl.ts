import { FullMovie, MovieRating } from "@/modules/movie/types/fullMovie";
import { MovieGenre, MovieLanguage, MovieRated } from "@/modules/movie/types/movieEnums";
import { FullMovieResponce } from "../movieResponce";
import { MovieImpl } from "./movieImpl";


export class FullMovieImpl extends MovieImpl implements FullMovie {
  // #region Protected variables
  protected _actors: string[];
  protected _awards: string;
  protected _boxOffice: number | undefined;
  protected _country: string;
  protected _dvd: Date | undefined;
  protected _director: string;
  protected _genre: MovieGenre[];
  protected _language: MovieLanguage;
  protected _released: Date | undefined;
  protected _imdbVotes: number;
  protected _imdbRating: number;
  protected _writers: string[];
  protected _website: string;
  protected _runtime: number;
  protected _response: boolean;
  protected _ratings: MovieRating[];
  protected _rated: MovieRated | undefined;
  protected _production: string;
  protected _plot: string;
  protected _metascore: number | undefined;
  // #endregion

  // #region Public Getters
  public get actors(): string[] {
    return this._actors;
  }

  public get awards(): string {
    return this._awards;
  }

  public get boxOffice(): number | undefined {
    return this._boxOffice;
  }

  public get country(): string {
    return this._country;
  }

  public get dvd(): Date | undefined {
    return this._dvd;
  }

  public get director(): string {
    return this._director;
  }

  public get genre(): MovieGenre[] {
    return this._genre;
  }

  public get language(): MovieLanguage {
    return this._language;
  }

  public get metascore(): number | undefined {
    return this._metascore;
  }

  public get plot(): string {
    return this._plot;
  }

  public get production(): string {
    return this._production;
  }

  public get rated(): MovieRated {
    return this._rated;
  }

  public get ratings(): MovieRating[] {
    return this._ratings;
  }

  public get released(): Date | undefined {
    return this._released;
  }

  public get response(): boolean {
    return this._response;
  }

  public get runtime(): number {
    return this._runtime;
  }

  public get website(): string {
    return this._website;
  }

  public get writers(): string[] {
    return this._writers;
  }

  public get imdbRating(): number {
    return this._imdbRating;
  }

  public get imdbVotes(): number {
    return this._imdbVotes;
  }
  // #endregion

  // #region protected setters
  setActors(value: string) {
    this._actors = value.split(',').map((item) => item.trim());
    if (this._actors.length == 0) {
      throw new Error('actors is empty');
    }
  }

  setAwards(value: string) {
    this._awards = value || '';
  }

  setBoxOffice(value: string) {
    try {
      value = value.split('$')[1];
      this._boxOffice = Number.parseInt(value.replace(/,/g, ''));
    } catch {
      this._boxOffice = undefined;
    }
  }

  setCountry(value: string) {
    this._country = value;
  }

  setDvd(value: string) {
    try {
      this._dvd = value !== undefined ? new Date(value) : undefined;
    } catch {
      throw new Error('Error dvd date');
    }
  }

  setDirector(value: string) {
    this._director = value;
  }

  setGenre(value: string) {
    try {
      const genres: MovieGenre[] = value.split(',').map((item) => item.trim()).reduce((acc, el) => {
        acc.push(MovieGenre[el]);
        return acc;
      }, []);
      this._genre = genres;
    } catch {
      throw new Error('Error genre');
    }
  }

  setLanguage(value: string) {
    try {
      this._language = MovieLanguage[value];
    } catch {
      throw new Error('Error language');
    }
  }

  setMetascore(value: string) {
    try {
      this._metascore = Number.parseInt(value);
    } catch {
      throw new Error('Error metascore');
    }
  }

  setPlot(value: string) {
    this._plot = value || 'N/a';
  }

  setProduction(value: string) {
    this._production = value || 'N/a';
  }

  setRated(value: string) {
    try {
      if (value === 'N/a') {
        this._rated = undefined
        return
      }
      const simpleValue = value.replace('-', '');
      this._rated = MovieRated[simpleValue];
      if (!this._rated) {
        throw new Error('rated is undefined')
      }
    } catch {
      throw new Error('Error rated');
    }
  }

  setRatings(value: Record<string, string>[]) {
    try {
      this._ratings = value.reduce((acc, el) => {
        const obj: MovieRating = {
          source: el.Source,
          value: el.Value,
        };
        acc.push(obj);
        return acc;
      }, []);
    } catch {
      throw new Error('Error ratings');
    }
  }

  setReleased(value: string) {
    try {
      this._released = value !== undefined ? new Date(value) : undefined;
    } catch {
      throw new Error('Error realised date');
    }
  }

  setResponse(value: string) {
    try {
      this._response = Boolean(value);
    } catch {
      throw new Error('Error response');
    }
  }

  setRuntime(value: string) {
    try {
      this._runtime = Number.parseInt(value);
    } catch {
      throw new Error('Error runtime');
    }
  }

  setWebsite(value: string) {
    this._website = value || 'N/a';
  }

  setWriters(value: string) {
    this._writers = value.split(',').map((item) => item.trim());
  }

  setImdbRating(value: string) {
    try {
      const imdbRating = Number.parseFloat(value);
      this._imdbRating = imdbRating;
    } catch {
      throw new Error('Error ImdbRating');
    }
  }

  setImdbVotes(value: string) {
    try {
      const imdbVotes = Number.parseFloat(value.replace(/,/g, ''));
      this._imdbVotes = imdbVotes;
    } catch {
      throw new Error('Error ImdbVotes');
    }
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
