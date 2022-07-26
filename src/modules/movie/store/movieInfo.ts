import type { FullMovie } from "../types/fullMovie";
import { useMoviesStore } from "./movies";
import type { MovieInfoState } from "./types/moviesStore";

const movieInfoState: MovieInfoState = {
  isShowModal: false,
  movie: null
}

export const useMovieInfoStore = defineStore('movieInfo', {
  state: () => movieInfoState,
  getters: {},
  actions: {
    async showModalByID(id: string): Promise<void> {
      const store = useMoviesStore()
      this.movie = await store.fetchMovie(id)
      this.isShowModal = true
    },
    showModalByMovie(movie: FullMovie): void {
      this.movie = movie
      this.isShowModal = true
    },
    hideModal(): void {
      this.isShowModal = false
    }
  },
});