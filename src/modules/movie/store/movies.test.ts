import { useMoviesStore } from "./movies"

describe('test movies store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('check movies per page', () => {
    const store = useMoviesStore()
    expect(store.moviesPerPage).toBe(import.meta.env.VITE_APP_MOVIES_PER_PAGE)
  })
  test('check base page', () => {
    const store = useMoviesStore()
    expect(store.currentPage).toBe(1)
  })
  test('fetch movies', async () => {
    const store = useMoviesStore()
    await store.fetchMovies()

    expect(Object.keys(store.movies).length.toString()).toBe(import.meta.env.VITE_APP_MOVIES_PER_PAGE)
  })
})