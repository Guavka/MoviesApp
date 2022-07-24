<script setup lang="ts">
import { useMoviesStore } from './modules/movie/store/movies';

const posterBG = ref('')

const store = useMoviesStore()
store.fetchMovies()

function onChangePoster(poster: URL) {
  posterBG.value = poster.toString()
}
</script>

<template>
  <div id="app">
    <PosterBg :poster="posterBG" />
    <ElMain class="container">
      <MoviesList :list="store.movies" @change-poster="onChangePoster" />
    </ElMain>
  </div>
</template>

<style scoped lang="scss">
#app {
  position: relative;

  .container {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  }
}
</style>
