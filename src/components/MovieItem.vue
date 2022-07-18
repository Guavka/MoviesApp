<template>
  <ElContainer direction="vertical">
    <div class="movie-item">
      <div class="movie-item-poster" :style="posterBg">
      </div>
      <div class="text">Simple text</div>
    </div>
  </ElContainer>
</template>

<script setup lang="ts">
import { FullMovie } from '@/modules/movie/types/fullMovie';
interface Prop {
  movie: FullMovie
}
const props = defineProps<Prop>()
const posterBg = computed(() => {
  return {
    "background-image": `url(${props.movie.poster}})`
  }
}
)
</script>

<style scoped lang="scss">
.movie-item {
  text-align: center;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in;
  margin-bottom: 1rem;
  height: 300px;

  .movie-item-poster {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
  }
}
</style>