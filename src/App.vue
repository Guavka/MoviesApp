<script setup lang="ts">
import { useMoviesStore } from './modules/movie/store/movies';

const store = useMoviesStore()
store.fetchMovies()

</script>

<template>
  <header>

  </header>

  <main>

  </main>
</template>

<style scoped>
</style>
