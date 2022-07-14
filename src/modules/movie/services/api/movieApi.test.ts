import { FullMovie } from '../../types/fullMovie'
import MovieApi from './movieApi'
import { SearchMovieImpl } from './types/implementation/searchMovieImpl'
import { IdMovieParams, SearchMovieParams, TitleMovieParams } from './types/movieApiSettings'

describe('getMovieById', () => {
  test('get movie by  id', async () => {
    const settings: IdMovieParams = {
      i: 'tt5032026'
    }

    const movie: FullMovie = await MovieApi.getMovieById(settings)
    expect(movie.imdbID).toBe('tt5032026')
  })

  test('get movie by title', async () => {
    const settings: TitleMovieParams = {
      t: 'Anabel'
    }

    const movie: FullMovie = await MovieApi.getMovieByTitle(settings)
    expect(movie.imdbID).toBe('tt5032026')
  })

  test('search movie', async () => {
    const settings: SearchMovieParams = {
      s: 'Anabel'
    }

    const movieList: SearchMovieImpl = await MovieApi.searchMovie(settings)
    expect(movieList.search[0].year).toBe(2015)
  })
})