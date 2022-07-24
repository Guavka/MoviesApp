<template>
  <ElContainer direction="vertical" class="movie-list-wrap">
    <h3 class="list-title">IMDB Top 250</h3>
    <ElRow :gutter="50" justify="center">
      <template v-if="isExist">
        <ElCol :xs="22" :sm="8" :md="8" :lg="6" :xl="6" v-for="(movie, key) in list" :key="key">
          <MovieItem :movie="list[key]">
          </MovieItem>
        </ElCol>
      </template>
      <template v-else>
        Empty list
      </template>
    </ElRow>
  </ElContainer>
</template>

<script setup lang="ts">
import type { FullMovie } from '@/modules/movie/types/fullMovie';

export interface Prop {
  list: Record<string, FullMovie>
}

const props = defineProps<Prop>()
const isExist = computed(() => Object.keys(props.list).length)
</script>

<style scoped lang="scss">
.movie-list-wrap {
  padding: 0px 2.5rem;

  .list-title {
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>