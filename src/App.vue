<script setup lang="ts">
import MovieApi from './modules/movie/services/api/movieApi';
import { SearchMovieParams } from './modules/movie/services/api/types/movieApiSettings';

const settings: SearchMovieParams = {
  s: 'Anabel',
}
MovieApi.searchMovie(settings).then(res => { console.log(res) })
</script>

<template>
  <header>

  </header>

  <main>

  </main>
</template>

<style scoped>
</style>
