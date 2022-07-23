<script setup lang="ts">
import { useMoviesStore } from './modules/movie/store/movies';


const store = useMoviesStore()
store.fetchMovies()
</script>

<template>
  <ElMain>
    <MoviesList :list="store.movies"></MoviesList>
  </ElMain>
</template>

<style scoped>
</style>
