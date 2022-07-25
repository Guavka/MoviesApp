import type { MoviesState } from "./types/moviesStore";
import mock from "./mock/mock";
import MovieApi from "../services/api/movieApi";
import type { FullMovie } from "../types/fullMovie";
import type { IdMovieParams } from "../services/api/types/movieApiSettings";
import { MoviePlot } from "../types/movieEnums";
import { useLoaderStore } from "./loader";

const moviesPerPage = Number.parseInt(import.meta.env.VITE_APP_MOVIES_PER_PAGE)

const moviesState: MoviesState = {
  top250IDs: mock,
  moviesPerPage: moviesPerPage,
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
      const loaderStore = useLoaderStore()
      try {
        loaderStore.toggleLoader(true)
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
          if (el.imdbID !== undefined) {
            acc[el.imdbID] = el
          }
          return acc
        }, <Record<string, FullMovie>>{})
      }
      catch (e) {
        if (e instanceof Error)
          throw new Error('fetchMovies\n' + e.message)
      }
      finally {
        loaderStore.toggleLoader(false)
      }
    },
    async changePage(page: number) {
      this.currentPage = page
      this.fetchMovies()
    },
    async changePageSize(count: number) {
      this.moviesPerPage = count
      this.fetchMovies()
    },
    async removeMovie(id: string) {
      const index = this.top250IDs.indexOf(id)
      this.top250IDs.splice(index, 1)
      this.fetchMovies()
    }
  },
});
