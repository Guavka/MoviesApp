<script setup lang="ts">
import { useMoviesStore } from './modules/movie/store/movies';

const store = useMoviesStore()
store.fetchMovies()

const posterBG = ref('')
const currentPage = ref(1)
const moviesPerPage = ref(12)
const maxPages = ref(store.top250IDs.length)

function onChangePoster(poster: URL) {
  posterBG.value = poster.toString()
}
</script>

<template>
  <div id="app">
    <PosterBg :poster="posterBG" />
    <ElMain class="container">
      <MoviesList :list="store.movies" @change-poster="onChangePoster" />
      <MoviesPagination :current-page="currentPage" :max-movies="maxPages" :movies-per-page="moviesPerPage" />
    </ElMain>
  </div>
</template>

<style scoped lang="scss">
#app {
  position: relative;

  .container {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
}
</style>
