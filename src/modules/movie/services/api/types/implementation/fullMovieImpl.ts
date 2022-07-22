import type { FullMovie, MovieRating } from "@/modules/movie/types/fullMovie";
import { MovieGenre, MovieLanguage, MovieRated } from "@/modules/movie/types/movieEnums";
import type { FullMovieResponce } from "../movieResponce";
import { MovieImpl } from "./movieImpl";


export class FullMovieImpl extends MovieImpl implements FullMovie {
  // #region Protected variables
  protected _actors: string[] = [];
  protected _awards!: string;
  protected _boxOffice: number | undefined;
  protected _country!: string;
  protected _dvd: Date | undefined;
  protected _director!: string;
  protected _genre: MovieGenre[] = [];
  protected _language: MovieLanguage = MovieLanguage.ENGLISH;
  protected _released: Date | undefined;
  protected _imdbVotes!: number;
  protected _imdbRating!: number;
  protected _writers: string[] = [];
  protected _website!: string;
  protected _runtime!: number;
  protected _response = false;
  protected _ratings: MovieRating[] = [];
  protected _rated: MovieRated | undefined;
  protected _production!: string;
  protected _plot!: string;
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

  public get rated(): MovieRated | undefined {
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
    try {
      this._actors = value.split(',').map((item) => item.trim());
      if (this._actors.length == 0) {
        throw new Error('actors is empty');
      }
    }
    catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "actors". Value = ${value}\n${e.message}`)
    }
  }

  setAwards(value: string) {
    this._awards = value;
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
    try {
      if (value === '') {
        throw new Error()
      }
      this._country = value;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "title". Value = ${value}\n${e.message}`)
    }
  }

  setDvd(value: string) {
    try {
      this._dvd = value !== undefined ? new Date(value) : undefined;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "DVD". Value = ${value}\n${e.message}`)
    }
  }

  setDirector(value: string) {
    try {
      if (value === '') {
        throw new Error()
      }
      this._director = value;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "director". Value = ${value}\n${e.message}`)
    }
  }

  setGenre(value: string) {
    try {
      const result: MovieGenre[] = []
      const genres: MovieGenre[] = value.split(',').map((item) => item.trim()).reduce((acc, el) => {
        if (el.toUpperCase() in MovieGenre) {
          const index = Object.keys(MovieGenre).indexOf(el.toUpperCase());
          const genre = Object.values(MovieGenre)[index]
          acc.push(genre)
        }
        return acc;
      }, result);
      this._genre = genres;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "genre". Value = ${value}\n${e.message}`);
    }
  }

  setLanguage(value: string) {
    try {
      if (value.toUpperCase() in MovieLanguage) {
        const index = Object.keys(MovieLanguage).indexOf(value.toUpperCase());
        this._language = Object.values(MovieLanguage)[index]
      }
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "language". Value = ${value}\n${e.message}`);
    }
  }

  setMetascore(value: string) {
    try {
      this._metascore = Number.parseInt(value);
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "metascore". Value = ${value}\n${e.message}`);
    }
  }

  setPlot(value: string) {
    try {
      if (value === '') {
        throw new Error()
      }
      this._plot = value;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "plot". Value = ${value}\n${e.message}`)
    }
  }

  setProduction(value: string) {
    try {
      if (value === '') {
        throw new Error()
      }
      this._production = value;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "production". Value = ${value}\n${e.message}`)
    }
  }

  setRated(value: string) {
    try {
      if (value.toLowerCase() === 'n/a') {
        this._rated = undefined
        return
      }
      const simpleValue = value.replace('-', '');
      if (simpleValue.toUpperCase() in MovieLanguage) {
        const index = Object.keys(MovieRated).indexOf(simpleValue.toUpperCase());
        this._rated = Object.values(MovieRated)[index]
      }
      if (!this._rated) {
        throw new Error('rated is undefined')
      }
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "rated". Value = ${value}\n${e.message}`);
    }
  }

  setRatings(value: Record<string, string>[]) {
    try {
      const result: MovieRating[] = []
      this._ratings = value.reduce((acc, el) => {
        const obj: MovieRating = {
          source: el.Source,
          value: el.Value,
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
    try {
      this._released = value !== undefined ? new Date(value) : undefined;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "released". Value = ${value}\n${e.message}`);
    }
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
    try {
      this._runtime = Number.parseInt(value);
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "runtime". Value = ${value}\n${e.message}`);
    }
  }

  setWebsite(value: string) {
    try {
      if (value === '') {
        throw new Error()
      }
      this._website = value;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "website". Value = ${value}\n${e.message}`)
    }
  }

  setWriters(value: string) {
    try {
      if (value === '') {
        throw new Error()
      }
      this._writers = value.split(',').map((item) => item.trim());
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "writers". Value = ${value}\n${e.message}`)
    }
  }

  setImdbRating(value: string) {
    try {
      this._imdbRating = Number.parseFloat(value);
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "imdbRating". Value = ${value}\n${e.message}`);
    }
  }

  setImdbVotes(value: string) {
    try {
      const imdbVotes = Number.parseFloat(value.replace(/,/g, ''));
      this._imdbVotes = imdbVotes;
    } catch (e) {
      if (e instanceof Error)
        throw new Error(`Error "imdbRating". Value = ${value}\n${e.message}`);
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
