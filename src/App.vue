<script setup lang="ts">
import { useMoviesStore } from './modules/movie/store/movies';


const store = useMoviesStore()
store.fetchMovies()
</script>

<template>
  <div id="app">
    <PosterBg />
    <ElMain class="container">
      <MoviesList :list="store.movies" />
    </ElMain>
  </div>
</template>

<style scoped lang="scss">
#app {
  position: relative;

  .container {
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
