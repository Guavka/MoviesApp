import { MoviesState } from "./types/moviesStore";
import mock from "./mock";
import MovieApi from "../services/api/movieApi";
import { FullMovie } from "../types/fullMovie";
import { IdMovieParams } from "../services/api/types/movieApiSettings";
import { MoviePlot } from "../types/movieEnums";

const moviesState: MoviesState = {
  top250IDs: mock,
  moviesPerPage: import.meta.env.VITE_APP_MOVIES_PER_PAGE,
  currentPage: 1,
  movies: <Record<string, FullMovie>>{}
}

export const useMoviesStore = defineStore('movies', {
  state: () => moviesState,
  getters: {
    getSlicedIds: (state) => {
      return (from: number, to: number) => state.top250IDs.slice(from, to)
    }
  },
  actions: {
    async fetchMovies() {
      try {
        const { currentPage, moviesPerPage } = this
        const from = currentPage * moviesPerPage - moviesPerPage
        const to = currentPage * moviesPerPage
        const idsArray: string[] = this.getSlicedIds(from, to)

        const requests: Promise<FullMovie>[] = idsArray.map((id: string) => {
          const settings: IdMovieParams = {
            i: id,
            plot: MoviePlot.FULL
          }
          return MovieApi.getMovieById(settings)
        })
        const response = await Promise.all(requests)

        this.movies = response.reduce((acc, el) => {
          acc[el.imdbID] = el
          return acc
        }, <Record<string, FullMovie>>{})
      }
      catch (e) {
        throw new Error('fetchMovies\n' + e.message)
      }
    }
  },
});
