import type { LoaderState } from "./types/moviesStore";

const loaderState: LoaderState = {
  isShowLoader: false
}

export const useLoaderStore = defineStore('loader', {
  state: () => loaderState,
  getters: {},
  actions: {
    toggleLoader(flag: boolean) {
      this.isShowLoader = flag
    },
  },
});