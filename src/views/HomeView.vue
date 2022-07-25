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

watch(route.query, onPageQueryChange)

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

function onPageQueryChange({ page = 1 }) {
  onUpdateCurrentPage(Number(page))
}
</script>

<template>
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
