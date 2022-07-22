<template>
  <ElContainer direction="vertical">
    <h3 class="list-title">IMDB Top 250</h3>
    <ElRow>
      <template v-if="isExist">
        <ElCol :span="6" v-for="(movie, key) in list" :key="key">
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

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;
}
</style>