import { MovieGenreType, LanguageType, MovieType, RatedType } from "../enums"
import { IFullMovieModel, IRatingInfo } from "./IFullMovieModel"
import { ITextFullMovieModel } from "./ITextFullMovieModel"

export class FullMovieModel implements IFullMovieModel {
  //#region Private variables
  private _actors: string[]
  private _awards: string
  private _boxOffice: number | undefined
  private _country: string
  private _dvd: Date | undefined
  private _director: string
  private _genre: MovieGenreType[]
  private _language: LanguageType
  private _released: Date | undefined
  private _imdbVotes: number
  private _imdbRating: number
  private _imdbID: string
  private _year: number
  private _writers: string[]
  private _website: string
  private _type: MovieType
  private _title: string
  private _runtime: number
  private _response: boolean
  private _ratings: IRatingInfo[]
  private _rated: RatedType
  private _production: string
  private _poster: string
  private _plot: string
  private _metascore: number | undefined
  //#endregion

  //#region Public Getters
  public get actors(): string[] {
    return this._actors
  }
  public get awards(): string {
    return this._awards
  }
  public get boxOffice(): number | undefined {
    return this._boxOffice
  }
  public get country(): string {
    return this._country
  }
  public get dvd(): Date | undefined {
    return this._dvd
  }
  public get director(): string {
    return this._director
  }
  public get genre(): MovieGenreType[] {
    return this._genre
  }
  public get language(): LanguageType {
    return this._language
  }
  public get metascore(): number | undefined {
    return this._metascore
  }
  public get plot(): string {
    return this._plot
  }
  public get poster(): string {
    return this._poster
  }
  public get production(): string {
    return this._production
  }
  public get rated(): RatedType {
    return this._rated
  }
  public get ratings(): IRatingInfo[] {
    return this._ratings
  }
  public get released(): Date | undefined {
    return this._released
  }
  public get response(): boolean {
    return this._response
  }
  public get runtime(): number {
    return this._runtime
  }
  public get title(): string {
    return this._title
  }
  public get type(): MovieType {
    return this._type
  }
  public get website(): string {
    return this._website
  }
  public get writers(): string[] {
    return this._writers
  }
  public get year(): number {
    return this._year
  }
  public get imdbID(): string {
    return this._imdbID
  }
  public get imdbRating(): number {
    return this._imdbRating
  }
  public get imdbVotes(): number {
    return this._imdbVotes
  }
  //#endregion

  //#region Private settes
  setActors(value: string) {
    this._actors = value.split(',').map(item => item.trim())
    if (this._actors.length == 0) {
      throw new Error('actors is empty')
    }
  }
  setAwards(value: string) {
    this._awards = value || ''
  }
  setBoxOffice(value: string) {
    try {
      value = value.split('$')[1]
      this._boxOffice = Number.parseInt(value.replace(/,/g, ''))
    }
    catch {
      this._boxOffice = undefined
    }
  }
  setCountry(value: string) {
    this._country = value
  }
  setDvd(value: string) {
    try {
      this._dvd = value !== undefined ? new Date(value) : undefined
    }
    catch {
      throw new Error('Error dvd date')
    }
  }
  setDirector(value: string) {
    this._director = value
  }
  setGenre(value: string) {
    try {
      const genres: MovieGenreType[] = value.split(',').map(item => item.trim()).reduce((acc, el) => {
        acc.push(MovieGenreType[el])
        return acc
      }, [])
      this._genre = genres
    }
    catch {
      throw new Error('Error genre')
    }
  }
  setLanguage(value: string) {
    try {
      this._language = LanguageType[value]
    }
    catch {
      throw new Error('Error language')
    }
  }
  setMetascore(value: string) {
    try {
      this._metascore = Number.parseInt(value)
    }
    catch {
      throw new Error('Error metascore')
    }
  }
  setPlot(value: string) {
    this._plot = value || 'N/a'
  }
  setPoster(value: string) {
    this._poster = value || 'N/a'
  }
  setProduction(value: string) {
    this._production = value || 'N/a'
  }
  setRated(value: string) {
    try {
      const simpleValue = value.replace('-', '')
      const rated = RatedType[simpleValue]
      if (!rated) {
        throw new Error()
      }
      this._rated = rated
    }
    catch {
      throw new Error('Error rated')
    }
  }
  setRatings(value: Record<string, string>[]) {
    try {
      this._ratings = value.reduce((acc, el) => {
        const obj: IRatingInfo = {
          source: el.Source,
          value: el.Value
        }
        acc.push(obj)
        return acc
      }, [])
    }
    catch {
      throw new Error('Error ratings')
    }

  }
  setReleased(value: string) {
    try {
      this._released = value !== undefined ? new Date(value) : undefined
    }
    catch {
      throw new Error('Error realised date')
    }
  }
  setResponse(value: string) {
    try {
      this._response = Boolean(value)
    }
    catch {
      throw new Error('Error response')
    }
  }
  setRuntime(value: string) {
    try {
      this._runtime = Number.parseInt(value)
    }
    catch {
      throw new Error('Error runtime')
    }
  }
  setTitle(value: string) {
    if (!value || value === '') {
      throw new Error('Error title')
    }
    this._title = value
  }
  setType(value: string) {
    try {
      this._type = MovieType[value.charAt(0).toUpperCase() + value.slice(1)]
      if (!this._type) {
        throw new Error()
      }
    }
    catch {
      throw new Error('Error type')
    }
  }
  setWebsite(value: string) {
    this._website = value || 'N/a'
  }
  setWriters(value: string) {
    this._writers = value.split(',').map(item => item.trim())
  }
  setYear(value: string) {
    let year = 0
    try {
      year = Number.parseInt(value)
    }
    catch {
      throw new Error('Error runtime')
    }
    const maxYear = new Date().getFullYear() + 10
    if (year < 1800 || year > maxYear) {
      throw new Error(`Error year format. Year must be in range [1800,${maxYear}]`)
    }
    this._year = year
  }

  setImdbID(value: string) {
    this._imdbID = value
  }
  setImdbRating(value: string) {
    try {
      const imdbRating = Number.parseFloat(value)
      this._imdbRating = imdbRating
    }
    catch {
      throw new Error('Error ImdbRating')
    }
  }
  setImdbVotes(value: string) {
    try {
      const imdbVotes = Number.parseFloat(value.replace(/,/g, ''))
      this._imdbVotes = imdbVotes
    }
    catch {
      throw new Error('Error ImdbVotes')
    }
  }
  //#endregion

  constructor(settings: ITextFullMovieModel) {
    try {
      this.setImdbID(settings.imdbID)
      this.setActors(settings.actors)
      this.setAwards(settings.awards)
      this.setBoxOffice(settings.boxOffice)
      this.setCountry(settings.country)
      this.setDvd(settings.dvd)
      this.setDirector(settings.director)
      this.setGenre(settings.genre)
      this.setLanguage(settings.language)
      this.setMetascore(settings.metascore)
      this.setPlot(settings.plot)
      this.setPoster(settings.poster)
      this.setProduction(settings.production)
      this.setRated(settings.rated)
      this.setRatings(settings.ratings)
      this.setReleased(settings.released)
      this.setResponse(settings.response)
      this.setRuntime(settings.runtime)
      this.setTitle(settings.title)
      this.setType(settings.type)
      this.setWebsite(settings.website)
      this.setWriters(settings.writers)
      this.setYear(settings.year)
      this.setImdbRating(settings.imdbRating)
      this.setImdbVotes(settings.imdbVotes)
    }
    catch (e) {
      throw new Error(`Full movie info in ${this.imdbID}\n${e}`)
    }
  }
}