<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useMoviesStore } from '../modules/movie/store/movies'

const store = useMoviesStore()
store.fetchMovies()

const router = useRouter()
const route = useRoute()
if (route.query.page) {
  onUpdateCurrentPage(Number(route.query.page))
}

const posterBG = ref('')
const moviesCount = ref(store.top250IDs.length)

function onChangePoster(poster: URL) {
  posterBG.value = poster.toString()
}

function onUpdateCurrentPage(page: number) {
  store.changePage(page)
  router.push({ query: { page } })
}

function onUpdatePageSize(size: number) {
  store.changePageSize(size)
}
</script>

<template>
  <MoviesLoader :duration="2" loader-color="lightgray" :persentage="100" />
  <PosterBg :poster="posterBG" />
  <ElMain class="container">
    <MoviesList :list="store.movies" @change-poster="onChangePoster" />
    <MoviesPagination :current-page="store.currentPage" :max-movies="moviesCount" :movies-per-page="store.moviesPerPage"
      @update-current-page="onUpdateCurrentPage" @update-page-size="onUpdatePageSize" />
  </ElMain>

  <RouterView />
</template>

<style scoped lang="scss">
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
}
</style>
