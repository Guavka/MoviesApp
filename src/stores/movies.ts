import IMoviesStore from "./IMoviesStore";

const state: IMoviesStore = {

}

export const useCounterStore = defineStore('movies', {
  state: () => (state),
  getters: {
    slicedArray
  },
  actions: {
    async fetchMovies() {

    },
  },
});
